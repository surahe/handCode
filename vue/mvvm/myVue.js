// myVue.js
function myVue(options = {}) {
  this.$options = options;
  this.$el = document.querySelector(options.el);
  this.$_data = options.data;
  this.$_methods = options.methods;
  this._binding = {};

  this._observe(this.$_data);
  this._compile(this.$el);
}

/**
 * 
 * 遍历DOM，获取 v-click v-model v-bind 属性
 * 创建 watcher，添加到 _binding[attrVal]._directives
 */
myVue.prototype._compile = function (root) {
  let _this = this;
  let nodes = root.children;
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.children.length !== 0) {
      this._compile(node);
    }

    // 解析v-click
    if (node.hasAttribute("v-click")) {
      node.onclick = (function () {
        let attrVal = node.getAttribute("v-click");
        return _this.$_methods[attrVal].bind(_this.$_data); // 这里不是很理解
      })();
    }

    // 解析v-model
    if (node.hasAttribute("v-model") && (node.tagName === "INPUT" || node.tagName === "TEXTAREA")) {
      node.addEventListener("input", (function (index) {
        let attrVal = node.getAttribute("v-model");
        _this._binding[attrVal]._directives.push(new Watcher(
          "input",
          node,
          _this,
          attrVal,
          "value"
        ))
        return function () {
          _this.$_data[attrVal] = nodes[index].value;
        }
      })(i))
    }

    // 解析v-bind
    if (node.hasAttribute("v-bind")) {
      let attrVal = node.getAttribute("v-bind");
      _this._binding[attrVal]._directives.push(new Watcher(
        "text",
        node,
        _this,
        attrVal,
        "innerHTML"
      ))
    }
  }
}

/**
 * 
 * observe
 * 遍历 data，将key作为 _binding 的key，对 data 的属性 设置 get set
 * 当触发 data属性的set时候，遍历 binding._directives，触发 Update 方法
 * 
 */
myVue.prototype._observe = function (obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    this._observe(value);
    this._binding[key] = {
      _directives: []
    }
    let binding = this._binding[key];
    Object.defineProperty(obj, key, {
      get() {
        console.log(`获取`);
        return value;
      },
      set(newVal) {
        console.log(`更新${newVal}`);
        if (value !== newVal) {
          value = newVal;
          binding._directives.forEach(item => item.Update());
        }
      }
    })
  })

}

/**
 * 
 * 触发DOM更新
 */
function Watcher(name, el, vm, exp, attr) {
  this.name = name;
  this.el = el;
  this.vm = vm;
  this.exp = exp;
  this.attr = attr;
  this.Update();
}

Watcher.prototype.Update = function () {
  this.el[this.attr] = this.vm.$_data[this.exp];
}

export default myVue;
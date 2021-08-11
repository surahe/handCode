/**
  * 问题
  *
  * 没有对参数做检验
  * 判断是否对象的逻辑不够严谨
  * 没有考虑数组的兼容
  * 没有处理栈溢出
  * 没有处理循环引用
 */

function clone(source) {
  var target = {};
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      if (typeof source[i] === 'object') {
        target[i] = clone(source[i]); // 注意这里
      } else {
        target[i] = source[i];
      }
    }
  }

  return target;
}

/**
  * 问题
  * 
  * 没有处理栈溢出
  * 非JSON格式的值（undefined、函数等）会被忽略
 */
function cloneJSON(source) {
  return  JSON.parse(JSON.stringify(source));
}


/**
 * 
 * 比较完整版
 * 
 */

// 定义函数获取数据类型
function _getDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
// 定义函数克隆RegExp类型
function copyRegExp(regExp) {
  let attrs = '';
  if (regExp.global) attrs += 'g';
  if (regExp.ignoreCase) attrs += 'i';
  if (regExp.multiline) attrs += 'm';
  let newRegExp = new RegExp(regExp, attrs);
  newRegExp.lastIndex = regExp.lastIndex;
  return newRegExp;
}
// 定义深克隆函数
function clone(x) {
  // String Number Boolean Undefined Null 返回自身
  if (x == null || typeof x !== 'object') return x;
  // RegExp Date Function 克隆
  let type = _getDataType(x);
  let root;
  switch (type) {
    case 'RegExp':
      return copyRegExp(x);
    case 'Date':
      return new Date(x.getTime());
    case 'Function':
      return x;
    case 'Array':
      root = [];
      break;
    default:
      root = Object.create(Object.getPrototypeOf(x));
  }
  // Array Object 克隆
  // 用来去重 解决原数据中多个属性引用同一对象克隆后不相同问题
  const uniqueList = [];
  // 使用栈结构解决递归爆栈问题
  const stack = [
    {
      parent: root,
      key: undefined,
      data: x,
    }
  ];
  // 深度优先循环
  while (stack.length) {
    const {parent, key, data} = stack.pop();
    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      let type = _getDataType(data);
      switch (type) {
        case 'RegExp':
          parent[key] = copyRegExp(data);
          continue;
        case 'Date':
          parent[key] = new Date(data.getTime());
          continue;
        case 'Function':
          parent[key] = data;
          continue;
        case 'Array':
          res = parent[key] = [];
          break;
        default:
          let proto = Object.getPrototypeOf(data);
          res = parent[key] = Object.create(proto);
      }
    }
    //数据引用已经存在则赋值并退出本次循环,不存在则缓存
    let uniqueData = uniqueList.find(item => item.source === data);
    if (uniqueData) {
      parent[key] = uniqueData.target;
      continue;
    } else {
      uniqueList.push({
        source: data,
        target: res,
      });
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (data[k] == null || typeof data[k] !== 'object') {
          // 基础类型克隆
          let descriptor=Object.getOwnPropertyDescriptor(data,k);
          Object.defineProperty(res,k,descriptor);
        } else {
          // 引用类型加入stack循环处理
          stack.push({
            parent: res,
            key: k,
            data: data[k],
          });
        }
      }
    }
  }
  return root;
}
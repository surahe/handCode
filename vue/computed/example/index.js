//1、首先来创建一个Vue构造函数：
function Vue() {
}
//2、设置data和computed的值：
let data = {
  name: 'Hello',
}
let computed = {
  getfullname: function () {
    console.log('-----走了computed 之 getfullname------')
    console.log('新的值为：' + data.name + ' - world')
    return data.name + ' - world'
  }
}
//3、实例化Vue并把data挂载到Vue上
let vue = new Vue()
vue.data = data
//4、创建Watcher对象
let updateComponent = (vm) => {
  // 收集依赖
  data.name
}
new Watcher(vue, updateComponent, () => { })
//5、初始化Data并收集依赖
observe(data)
//6、初始化computed
new initComputed(vue, computed)
function objectFactory() {
  // 使用objectFactory的时候,把arguments,转化为数组
  var args = Array.prototype.slice.call(arguments);

  //提取第1个构建对象
  var Constructor = args.shift();

  // 创建constructor实例 instance 
  var instance = Object.create(Constructor.prototype);

  // 使用apply函数运行args, 把 instance 绑定到 this
  var temp = Constructor.apply(instance, args);

  //返回对象判断 是object 还是 null 还是实例
  return temp instanceof Object ? temp : instance;
}
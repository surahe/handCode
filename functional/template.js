var str = "您好，<%=name%>。欢迎来到<%=location%>";

function template(str) {
  return function (data) {
    return str.replace(/<%=(\w+)%>/g, function(match, p1) {
      return data[p1] || ''
    })
  }
}

var compiled = template(str);
// compiled的输出值为：“您好，张三。欢迎来到网易游戏”
console.log(compiled({ name: "张三", location: "网易游戏" }))
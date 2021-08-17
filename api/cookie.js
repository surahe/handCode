// 添加cookie
function setCookie(key, value, maxAge) {
  // 在设置cookie前进行编码操作。
  value = encodeURIComponent(value);
  if (maxAge) {
    document.cookie = `${key}=${value};max-age=${maxAge};`;
  } else {
    document.cookie = `${key}=${value};`;
  }
}

// 获取cookie
function getCookie(key) {
  var arr = document.cookie.split(';'); // ['name=董书华','age=20',...]
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const a = arr[i].split('=');
      var index = a.findIndex(function (v) {
        return v.trim() == key;
      });
      if (index != -1) {
        return decodeURIComponent(a[1]);
      }
    }
  }
  return undefined;
}

// 删除cookie
function removeCookie(key) {
  var value = getCookie(key);
  setCookie(key, value, -60000);
}
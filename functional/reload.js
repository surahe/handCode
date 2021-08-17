function addMethod(object, name, fn) {
  var old = object[name]
  object[name] = function () {
    if (fn.length == arguments.length)
      return fn.apply(this, arguments);
    else if (typeof old == 'function')
      return old.apply(this, arguments);
  };
}

function Users() {
  addMethod(this, "find", function () {
    // Find all users...
  });
  addMethod(this, "find", function (name) {
    // Find a user by name
  });
  addMethod(this, "find", function (first, last) {
    // Find a user by first and last name
  });
}


var users = new Users();
users.find(); // Finds all
users.find("John"); // Finds users by name
users.find("John", "Resig"); // Finds users by first and last name
users.find("John", "E", "Resig"); // Does nothing
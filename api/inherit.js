/**
 * 
 * 函数实现
 * 
 */

function Parent5() {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}

function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}

Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5

var s7 = new Child5()

console.log(s7 instanceof Child5, s7 instanceof Parent5); // true true

console.log(s7.constructor)  // function Child (name, age) { Parent.call(this, name);    this.age = age;}


/**
 * 
 * Class 实现
 * 
 */

class Animal {
  constructor() {
    console.log("Animal Constructor");
  }
}
Animal.prototype.species = "动物";

class Cat extends Animal {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }
}

let cat1 = new Cat("测试1", "红色")
console.log(cat1);
var vd = require('../index')
var el = vd.el
var diff = vd.diff


var ul1 = el('div',{id:'virtual-dom'},[
  el('p',{},['Virtual DOM']),
  el('ul', { id: 'list' }, [
	el('li', { class: 'item' }, ['Item 1']),
	el('li', { class: 'item' }, ['Item 2']),
	el('li', { class: 'item' }, ['Item 3'])
  ]),
  el('div',{},['Hello World'])
]) 
var ul2 = el('div',{id:'virtual-dom'},[
  el('p',{},['Virtual DOM']),
  el('ul', { id: 'list' }, [
	el('li', { class: 'item' }, ['Item 21']),
	el('li', { class: 'item' }, ['Item 23'])
  ]),
  el('p',{},['Hello World'])
]) 
var patches = diff(ul1,ul2);

console.log('ul1', ul1)
console.log('patches:',patches);

//实现Object.create()
//特点：
/*
Object.create(null)
创建的对象是一个空对象，
在该对象上没有继承 Object.prototype 原型链上的属性或者方法,
*/
function create(proto) {
    function F() {

    }
    F.prototype=proto;

    return new F();
}
var b={name: 'shit'};
//原型链指向b，本身不带属性
let newObject=create(b);
console.log(newObject.__proto__);

//Object.create()使用
var a={name:'shit'};
// let obj=new Object(a);
let obj=Object.create(a);
console.log(obj.__proto__);

//new Object()使用
var c={name: 'shit'};
let newObject=new Object(c);
console.log(newObject.name);

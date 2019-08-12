//实现bind函数
Function.prototype.newBind=function() {
    //判断函数是否为function
    if (typeof this !=='function') {
        throw new Error("Function.prototype.bind-绑定不可用");
    }
    var self=this;
    //返回第一个参数，arguments为类数组对象，不能直接操作
    //pop, push, shift, unshift全部改变原数组
    var context=[].shift.call(arguments);
    //arguments剩余参数，将类数组转化为真正的数组
    var args=[].slice.call(arguments);

    return function() {
        self.apply(context,args.concat([].slice.call(arguments)));
    };
}

var obj = {name: 'shaojingjing'}
var func = function(a,b,c,d){
  console.log(this.name); // shaojingjing
  console.log([a,b,c,d]); // [1,2,3,44]
}.newBind(obj,1,2,3,4)();


let test=[1,2,3];
//let temp=[].shift.call(test);
console.log(test.slice());

//bind, call, apply，函数对象方法，就是为了改变函数体内部 this 的指向，
//相同点：
//第一个参数为this指向，
//区别:
//call，参数分开，
//apply，第二个参数为数组
//bind，参数和call一致，返回为函数，不执行
//实例，
let Example=function() {
    this.color='red';
    this.weather='rain';
    this.say=function() {
        console.log(this.color,this.weather);
    }
}

var E1={
    color:'yellow',
    weather:'green'
}

var E2={
    weather:'green'
}

let Exa=new Example();
Exa.say.call(E1);
Exa.say.apply(E1);


//例子2
function hello(name,age){
 console.log(name);
  console.log(age);
}
hello.call(hello,"tsrot",24);
hello.apply(this,["tsrot",24]);

//例子3
function box(){
 console.log.apply(this,arguments);
};
box(1); //1
box(1,2); //1 2

//测试空数组
console.log([].slice.call([]));

//模拟实现new
//new操作符做了哪些事？
/*
1.创建了一个新对象
2.将this指向新创建的对象
3.将新创建对象的原型链连接到函数的原型对象上
*/

function newNew() {
    const obj=new Object();
    //取得第一个参数
    const Constructor=[].shift.call(arguments);
    //连接原型链
    obj.__proto__=Constructor.prototype;

    const ret=Constructor.apply(obj,arguments);
    console.log('typeof:'+typeof ret);
    return typeof ret==='object'? ret: obj;
}


function test() {
    console.log('shit');
}

//测试第一个参数
let newObj=newNew(test);

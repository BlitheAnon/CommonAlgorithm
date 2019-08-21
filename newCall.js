//实现call函数
/*
call,apply特点：
属于函数属性，没有传入this指向，this指向全局
函数执行，改变this
*/
//参考链接：https://github.com/mqyqingfeng/Blog/issues/11
Function.prototype.newCall = function(context) {
    //当context为null时，指向全局
    //获取第一个参数
    var context = context || window;
    //给context对象添加一个fn属性,fn等于this，即最前调用的函数
    // context.fn=this;
    // //运行这个函数
    // context.fn();
    // //删除函数
    // delete context.fn;
    //取得第一参数
    let args = [];
    //生成1-length位的数组
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    context.fn = this;
    //执行函数
    let result = context.fn(...args);
    delete context.fn;
    //删除前返回结果
    return result;
}

// var foo = {
//     value: 1
// }
var value=1;

function getValue(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

// getValue.call(null);
getValue.newCall(null);

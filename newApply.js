//实现apply函数
//参考目录19.newCall.js函数的实现
Function.prototype.newApply = function(context,arr) {
    //ide中全局对象为global, 浏览器中全局对象window
    context = context || global;
    //添加fn属性，赋值this为调用函数
    context.fn = this;
    let result;
    //判断arr是否存在
    if (arr) {
        let args = [];
        for (let i = 0; i < arr.length; i++) {
            args.push(arr[i]);
        }
        //执行函数
        result=context.fn(...args);
    }else{
        result=context.fn();
    }

    //删除函数
    delete context.fn;
    return result;
}

var foo = {
    value: 1
}
var value=1;

function getValue(name,age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

// getValue.apply(foo,['shit','11']);
getValue.newApply(null);
getValue.newApply(foo,['shit','11']);
getValue.newApply(null,['shit','11']);

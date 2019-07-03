//实现bind函数
Function.prototype.newBind=function() {
    //判断函数是否为function
    if (typeof this !=='function') {
        throw new Error("Function.prototype.bind-绑定不可用");
    }
    var self=this;
    //返回第一个参数
    var context=[].shift.call(arguments);
    //常用来将类数组转化为真正的数组
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

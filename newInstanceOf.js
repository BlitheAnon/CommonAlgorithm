//实现instanceOf
function newInstanceOf(left, right) {
    //left，right表示左右表达式
    //取右函数的显式原型prototype
    right = right.prototype;
    //取左边对象的隐式原型
    left = left.__proto__;
    while (true) {
        console.log(left);
        if (left === null) return false;
        if (right === left) return true;
        //原型链后移
        left=left.__proto__;
    }
}

//测试新instanceof
function Root() {
}

let son=new Root();

//console.log(newInstanceOf(son,Root));
console.log(newInstanceOf(Root,son));

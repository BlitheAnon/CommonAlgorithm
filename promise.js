//promise使用实例
//作用，处理异步操作，promise链式调用解决回调地狱问题
//创建promise实例
var p = new Promise(function(resolve, reject) {
    //延迟1秒执行
    setTimeout(function() {
        resolve("resolve");
    }, 1000);
    //reject('reject');
    //console.log("创建一个新的Promise");
});

p.then(function(x) {
    console.log('1');
    console.log(x);
},function(y) {
    console.log('2');
    console.log(y);
});

//then后的3种写法
/*
.then(fun1,fun2)
.then(fun1)
.then(null,fun2)
*/
//catch=.then(null,fun2)


//链式调用使用
var p = new Promise(function(resolve, reject) {
    console.log('promise启动');
    resolve(10);
});

function add(input) {
    return new Promise(function(resolve,reject) {
        console.log(input+',进行自加运算');
        //注意：setTimeout第三个参数，为第一个函数的参数
        setTimeout(resolve,1000,input+input);
    });
}

function multiply(input) {
    return new Promise(function(resolve,reject) {
        console.log(input+',进行自乘运算');
        setTimeout(resolve,1000,input*input);
    });
}

p.then(add)
.then(multiply)
.then(add)
.then(multiply)
.then(function(result) {
    console.log('结束');
    console.log(result);
}).catch(function(err) {
    console.log('出错');
    console.log(err);
});


//此外Promise除了then方法外，
//还提供了Promise.resolve、Promise.all、Promise.race等等方法。

/*
（1）一个promise必须有3个状态，pending，fulfilled(resolved)，
rejected当处于pending状态的时候，可以转移到fulfilled(resolved)或者rejected状态。
当处于fulfilled(resolved)状态或者rejected状态的时候，就不可变。
promise英文译为承诺，也就是说promise的状态一旦发生改变，就永远是不可逆的。

（2）一个promise必须有一个then方法，then方法接受两个参数：
promise.then(onFulfilled,onRejected)
其中onFulfilled方法表示状态从pending——>fulfilled(resolved)时所执行的方法，
而onRejected表示状态从pending——>rejected所执行的方法。

（3）为了实现链式调用，then方法必须返回一个promise
promise2=promise1.then(onFulfilled,onRejected)
*/

//1.0版promise
function promise1(constructor) {
    let self = this;
    //设定初始status, value, reason
    self.status = 'pending';
    //resolved
    self.value = undefined;
    //rejected
    self.reason = undefined;

    function resolve(value) {
        //保证状态改变不可逆
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved';
        }
    }

    function reject(reason) {
        //保证状态改变不可逆
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
        }
    }

    //捕获构造异常
    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

//在promise原型上定义链式调用的then方法
promise1.prototype.then=function(onFulfilled,onRejected) {
    let self=this;
    switch (self.status) {
        case 'resolved':
            onFulfilled(self.value);
            break;
        case 'rejected':
            onRejected(self.reason);
            break;
        default:
    }
};

//自己实现的promise测试
var p1=new promise1(function(resolve,reject) {
    resolve('shit');
    reject(1);
})

p1.then(function(x) {
    console.log(x);
},function(y) {
    console.log(y);
});

//promise.all使用
/*
Promise.all可以将多个Promise实例包装成一个新的Promise实例。
同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，
而失败的时候则返回最先被reject失败状态的值。
*/
let p1 = new Promise((resolve, reject) => {
  resolve('成功了');
});

let p2 = new Promise((resolve, reject) => {
  resolve('success');
});

let p3 = Promise.reject('失败');

Promise.all([p1, p2]).then((result) => {
  console.log(result);               //['成功了', 'success']
}).catch((error) => {
  console.log(error);
})

Promise.all([p1,p3,p2]).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);      // 失败了，打出 '失败'
})

//promise.race
/*
返回最快完成的promise，
不管结果本身是成功状态还是失败状态。
*/
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
});

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
  console.log('error');
});


//promise和settimeout 执行顺序
//promise的任务会在当前事件循环末尾中执行，
//settimeout中的任务是在下一次事件循环中执行。
new Promise(function(resolve,reject) {
    console.log(2);
    resolve();
    setTimeout(function() {
        console.log(1);
    },0);
}).then(function(x) {
    console.log(4);
    setTimeout(function() {
        console.log(6);
    });
});

console.log(5);

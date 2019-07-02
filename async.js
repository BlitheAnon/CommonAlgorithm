/* async 表示这是一个async函数，await只能用在这个函数里面。
await 表示在这里等待异步操作返回结果，再继续执行。
await 后一般是一个promise对象
示例:async用于定义一个异步函数，该函数返回一个Promise。*/

let timer=async function timer() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('500');},500);
        });
}

timer().then(result=>{console.log(result);}).catch(err=>{
    console.log(err.message);
});

let sayHi=async function sayHi() {
    let hi=await 'hello world';
    return hi;
    //return Promise.resolve(hi);
}

sayHi().then(result=>{
    console.log(result);
})

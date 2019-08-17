//async, await使用
async function demo(params) {
    let result=await Promise.resolve(12);
    console.log(result);
}

demo();

/*
async表示一个async函数，await=async wait,
await表示等待promise返回结果再执行，后跟promise对象
await放普通函数内会报错
await强制把异步变为同步
*/

//async代替promise实现
//promise
function sleep(value) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value);
        },value);
    });
}

sleep(100).then(res=>{
    return sleep(res+100);
}).then(res=>{
    return sleep(res+100);
}).then(res=>{
    console.log(res);
});

//async
function sleep(value) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value);
        },value);
    });
}

async function demo() {
    let res1=await sleep(100);
    let res2=await sleep(res1+100);
    let res3=await sleep(res2+100);
    return res3;
}

demo().then(res=>{
    console.log(res);
});

//添加错误处理
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error');
    },1000);
});

async function demo() {
    try{
        let result=await p;
    }catch(e){
        console.log(e);
    }
}

demo();
//或者
// demo().catch((err)=>{
//     console.log(err);
// })

//for循环中使用await会报错
/*
原因：上下文就变成了array，
而不是async function，就会报错。
*/

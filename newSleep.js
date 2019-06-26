//1.promise实现
function sleep(ms) {
    var temple=new Promise((resolve)=>{
        console.log(111);
        setTimeout(resolve,ms);
    })
    return temple;
}

sleep(2000).then(function() {
    console.log(222);
})


//2.async实现
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function test() {
    var temple=await sleep(1000);
    console.log(1111);
    return temple;
}

test();

//3.generate实现
//function*函数生成器
function* sleep(ms) {
    yield new Promise(function(resolve,reject) {
        console.log(111);
        setTimeout(resolve,ms);
    })
}
sleep(2000).next().value.then(function() {
    console.log(222);
});
/*
   函数生成器特点是函数名前面有一个‘*’

　　2、通过调用函数生成一个控制器

　　3、调用next()方法开始执行函数

　　4、遇到yield函数将暂停

　　5、再次调用next()继续执行函数
*/

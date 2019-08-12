//实现一个完整的ajax请求
//ajax原理
//Ajax不重新加载整个页面的情况下与服务器交换数据并更新部分网页内容，
//实现局部刷新，大大降低了资源的浪费，用于快速创建动态网页的技术

//XMLHttpRequest对象实例化
var xhr = new XMLHttpRequest();
//设定请求方法，地址，是否异步，默认true
xhr.open('get', 'xxx.php', true);
//设定需要发送的报文主体
xhr.send(null);
//监听readystatechange事件
xhr.onreadystatechange=function() {
    //通过readyState判断ajax请求状态
    //分为0,1,2,3,4
    if (xhr.readyState==4) {
        //4,响应解析完成，接收数据完成
        if (xhr.status==200) {
            //status判断请求是否成功，取得响应数据
            console.log(xhr.responseText);
        }
    }
};


//如何实现顺序执行的ajax，用回调函数，也可以使用Promise.then或者async等?

/*
Ø  用户发出异步请求；

Ø  创建 XMLHttpRequest 对象；

Ø  告诉 XMLHttpRequest 对象哪个函数会处理 XMLHttpRequest 对象状态的改变，为此要把对象的 onReadyStateChange 属性设置为响应该事件的 JavaScript 函数的引用

Ø  创建请求，用 open 方法指定是 get 还是 post ，是否异步， url 地址；

Ø  发送请求， send 方法

Ø  接收结果并分析

Ø  实现刷新
*/

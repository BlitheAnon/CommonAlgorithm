//实现一个完整的ajax请求
//ajax原理
//Ajax不重新加载整个页面的情况下与服务器交换数据并更新部分网页内容，
//实现局部刷新，大大降低了资源的浪费，用于快速创建动态网页的技术

//XMLHttpRequest对象实例化
var xhr = new XMLHttpRequest();
//设定请求方法，地址，是否异步
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

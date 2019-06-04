//普通对象深度克隆
var testObj1={a:1,b:{c:2}};
var testObj2=[1,2,3];

console.log(deepClone(testObj1));
console.log(deepClone(testObj2));

//数组属于对象，先做判断
function deepClone(obj) {
    //初始化一个新容器，后面用来分别添加数组值，对象值
    let newObj=obj instanceof Array?[]:{};
    for (let item in obj) {
        //判断对象是否具有该属性
        if (obj.hasOwnProperty(item)) {
            //浅拷贝
            //newObj[item] = obj[item];
            //将克隆后的值添加到容器
            newObj[item]=typeof obj[item]=='object'?deepClone(obj[item]):obj[item];
        }
    }
    return newObj;
}


//其实对于包装类，完全可以用=号来进行克隆，其实没有深度克隆一说
//
//使用valueOf()，克隆包装对象Number,String,Boolean，
function baseClone(base) {
    return base.valueOf();
}

var num=new Number(1);
var newNum=baseClone(num);

var str=new String('hello');
var newStr=baseClone(str);

var bol=new Boolean(true);
var newBol=baseClone(bol);

//克隆Date对象，正则对象RegExp
Date.prototype.clone=function() {
    return new Date(this.valueOf());
};
var date=new Date('2010');
var newDate=date.clone();

RegExp.prototype.clone=function() {
    var pattern=this.valueOf();
    var flag='';
    flag+=pattern.global?'g':'';
    flag+=pattern.ignoreCase?'i':'';
    flag+=pattern.multiline?'m':'';
    return new RegExp(pattern.source,flag);
};

var reg=new RegExp('/111/');
var newReg=reg.clone();

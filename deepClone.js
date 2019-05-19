//对象深度克隆
var testObj1={a:1,b:{c:2}};
var testObj2=[1,2,3];

console.log(deepClone(testObj1));
console.log(deepClone(testObj2));

//数组属于对象，先做判断
function deepClone(obj) {
    //初始化一个新容器，后面用来分别添加数组值，对象值
    let newObj=obj instanceof Array?[]:{};
    for (let item in obj) {
        let temp=typeof obj[item]=='object'?deepClone(obj[item]):obj[item];
        //将克隆后的值添加到容器
        newObj[item]=temp;
    }
    return newObj;
}

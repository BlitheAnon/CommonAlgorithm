//数组去重3种方法
//1.indexOf循环去重
//初始化一个空数组，循环目标数组添加进空数组，若存在则不添加
var test = [1, 1, 1, 2, 3, 3, 4, 5];

function unique1(arr) {
    let newArr = [];
    arr.forEach((item) => {
        if (newArr.indexOf(item) == -1) {
            newArr.push(item);
        }
    });

    return newArr;
}

console.log(unique1(test));

//2.利用ES6 Set去重；Array.from(new Set(array))，rest存储结果
console.log(Array.from(new Set(test)));
console.log([...new Set(test)]);

//3.Object 键值对去重；把数组的值存成 Object 的 key 值，
//如 Object[value1] = true，在判断另一个值的时候，
//如果 Object[value2]存在的话，就说明该值是重复的。
function unique3(arr) {
    let obj = {};
    arr.forEach((item) => {
        if (!obj[item]) {
            obj[item] = true;
        }
    });

    let newArr = [];
    //for in循环遍历obj,生成数组
    for (let key in obj) {
        newArr.push(parseInt(key));
    }
    return newArr;
}

console.log(unique3(test));

// var person={fname:"John",lname:"Doe",age:25};
// console.log(person['x']);
//
// if (!undefined) {
//     console.log('test');
// }
//
// console.log(undefined==undefined);


//4.双层循环去重
var array = ['1', '2', '1', '2', '4', '9', '1'];

function unique(array) {
    //空数组，保存结果
    var res = [];
    //1次循环
    for (var i = 0; i < array.length; i++) {
        //用来循环res数组
        for (var j = 0; j < array.length; j++) {
            //判断是否在结果数组中存在，重复则停止
            if (array[i] == res[j]){
                break;
            }
        }
        if (j === array.length) {
            //完整遍历后不存在宠物，则添加外层循环array[i]到结果数组
            res.push(array[i]);
        }
    }
    return res;
}
console.log(unique(array));

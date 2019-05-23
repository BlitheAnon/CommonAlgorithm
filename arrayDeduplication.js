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

//2.利用ES6 Set去重；Array.from(new Set(array))
console.log(Array.from(new Set(test)));

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

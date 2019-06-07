//把多维数组变成一维数组的方法

var testArr=[[1.1,2,3],[4,5,6]];
console.log(flatten1(testArr));

//1.toString法
function flatten1(arr) {
    //转字符串，去','号后连接,字符转num
    return arr.toString().split(',').map(function(item) {
        return +item;
    });
}

//2.递归
var testArr=[[1.1,2,3],[4,5,6]];
console.log(flatten2(testArr));
function flatten2(arr) {
    let result=[];
    for (let item of arr) {
        //判断item是否为数组
        if (Array.isArray(item)) {
            //连接数组
            result=result.concat(flatten2(item))
        }else {
            result.push(item);
        }
    }

    return result;
}

//3.reduce
//reduce给数组每个方法执行指定函数
var testArr=[[1.1,2,3],[4,5,6]];
console.log(flatten3(testArr));
function flatten3(arr) {
    return arr.reduce(function(total,current) {
        return total.concat(Array.isArray(current)?flatten3(current):current);
    },[]);
}

//4.rest
//some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
//some() 方法会依次执行数组的每个元素：
var testArr=[[1.1,2,3],[4,5,6]];
console.log(flatten4(testArr));
function flatten4(arr) {
    while (arr.some(function(item) {
        return Array.isArray(item);
    })) {
        arr=[].concat(...arr);
    }

    return arr;
}

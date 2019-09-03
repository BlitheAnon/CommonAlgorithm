//二维数组
let arr=[];
for (var i = 0; i < 5; i++) {
    //给每行一个容器
    let temp=[];
    for (var j = 0; j < 5; j++) {
        temp.push(i+''+j);
    }
    //汇总一行
    arr.push(temp);
}

console.log(arr);
console.log(arr[0][1]);
console.log(arr[0][0]);
console.log(arr[4][4]);

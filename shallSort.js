//希尔排序
//又称为缩小增量排序
//是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。
//一般的初次取序列的一半为增量，以后每次减半，直到增量为1。

//var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04];
var arr=[8,9,1,7,2,3,5,4,6];

//var arr=[8,9,1,7];
var len = arr.length;
//取得增量，每次取半
for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
    for (var i = fraction; i < len; i++) {
        //间隔fraction的两个数，进行比较，小前大后
        for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
            var temp = arr[j];
            arr[j] = arr[fraction + j];
            arr[fraction + j] = temp;
        }
    }
}

console.log(arr);

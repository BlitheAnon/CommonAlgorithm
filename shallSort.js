//希尔排序
//又称为缩小增量排序
//是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。
//一般的初次取序列的一半为增量，以后每次减半，直到增量为1。

// var test_arr=[8,9,1,7,2,3,5,4,6];
var test_arr=[8,9,1,7];
console.log(shallSort(test_arr));
function shallSort(arr) {
    //取数组长度设置增量
    let increment = arr.length;
    let temp;

    do {
        //设置增量，分为x组
        increment = Math.floor(increment / 2);
        for (var i = increment; i < arr.length; i++) {
            if (arr[i] < arr[i - increment]) {
                temp = arr[i];
                //前面大于后面，后移increment位
                for (var j = i - increment; j >= 0 && temp < arr[j]; j -= increment) {
                    arr[j + increment] = arr[j];
                }
                arr[j + increment] = temp;
            }
        }
    } while (increment > 1);

    return arr;
}


//2
var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04];
var len = arr.length;
for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
    for (var i = fraction; i < len; i++) {
        for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
            var temp = arr[j];
            arr[j] = arr[fraction + j];
            arr[fraction + j] = temp;
        }
    }
}
console.log(arr);

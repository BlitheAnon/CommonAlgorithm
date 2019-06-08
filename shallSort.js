//希尔排序
//又称为缩小增量排序
//是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。
//一般的初次取序列的一半为增量，以后每次减半，直到增量为1。

var test_arr=[8,9,1,7,2,3,5,4,6,0];
console.log(shallSort(test_arr));
function shallSort(arr) {
    //取数组长度设置增量
    let increment = arr.length;
    let temp;

    //设置增量，分为组数?
    do {
        increment = Math.floor(increment / 3) + 1;
        for (var i = increment; i < arr.length; i++) {
            if (arr[i] < arr[i - increment]) {
                temp = arr[i];
                for (var j = i - increment; j >= 0 && temp < arr[j]; j -= increment) {
                    arr[j + increment] = arr[j];
                }
                arr[j + increment] = temp;
            }
        }
    } while (increment > 1);

    return arr;
}

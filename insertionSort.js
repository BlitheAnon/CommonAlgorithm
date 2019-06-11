//每次处理就是
//将无序数列的第一个元素与有序数列的元素从后往前逐个进行比较，
//找出插入位置，将该元素插入到有序数列的合适位置中。
//算法适用于少量数据的排序
//稳定
//时间复杂度O(n^2）

var arr_test = new Array(1, 3, 2, 8, 9, 1, 5);

console.log(insertionSort(arr_test));
//console.log(insertionSort2(arr_test2));


//直接插入
function insertionSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    //从数组第一位开始遍历
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            //i-1~0位，两两对比，将j位的值入已排序好的数组中，形成新的有序数组
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }

    return arr;
}

//折半插入，二分插入排序
// var arr_test = new Array(1, 3, 2, 8, 9, 1, 5);
var arr_test = new Array(1, 2, 3,4,2.5);
console.log(insertionSort2(arr_test));

function insertionSort2(arr) {
    if (arr.length < 2) {
        return arr;
    }
    //从数组第一位开始遍历
    for (let i = 1; i < arr.length; i++) {
        //令第i个数为临时值，最后用来替换
        let temp = arr[i];
        //每次折半后会改变的low和high,0~i-1内折半
        let low = 0,
            high = i - 1;
        //确定范围0~i-1内，最终low和high
        while (low <= high) {
            // mid = low + Math.floor((high - low) / 2);
            let mid = Math.floor((high + low) / 2);
            if (temp > arr[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        //前面已使得数组重大到小排序好了，最后一位开始，前项后移
        for (let j = i - 1; j >= low; j--) {
            arr[j + 1] = arr[j];
        }
        //经过上面遍历，除low项都整体后移了，替换low项
        arr[low] = temp;
    }

    return arr;
}

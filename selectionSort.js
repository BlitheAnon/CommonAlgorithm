//每一次从待排序的数据元素中选出最小（或最大）的一个元素，
//存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，
//然后放到已排序序列的末尾。以此类推。
//选择排序是不稳定的排序方法。
//时间复杂度O(n^2）
var test_arr = [2,3,0,1,5,4];
console.log(selectionSort(test_arr));

function selectionSort(arr) {
    var len = arr.length;
    var temp;
    var minindex;
    for (var i = 0; i < len - 1; i++) {
        minindex = i;
        for (var j = i + 1; j < len; j++) {
            //数组后一项小于开始项时，重设minindex为小的下标
            //寻找最小数的下标，每次找到小的数就更新下标
            if (arr[j] < arr[minindex]) {
                minindex = j;
            }
        }

        //交换arr[i]和arr[minindex]
        temp = arr[i];
        arr[i] = arr[minindex];
        arr[minindex] = temp;
    }

    return arr;
}

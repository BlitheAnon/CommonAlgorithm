//确定一个基准数。
//左右同时开始遍历数组，比基准数大的放右边，比基准数小的放左边
//快速排序的平均时间复杂度是 O（nlogn），最坏情况下的时间复杂度是O（n^2)
var arr = [5, 7, 1, 8, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

function quickSort(arr, left, right) {
    if (left<right) {
        //通过快排，求出基准数一次快排后的位置
        let keyIndex=quickSortInner(arr,left,right);
        //每次将分割后的左右两部分再次快排，不断操作原数组
        quickSort(arr,left,keyIndex-1);
        quickSort(arr,keyIndex+1,right);
    }
}

function quickSortInner(arr, left, right) {
    //每一次快速排序，将数组分割成两部分，左边那部分整体小于基准数，右边部分大于基准数
    //设基准数
    let key = arr[left];

    while (left < right) {
        //从后向前查找，如果后面的数大于等于基数key，则继续向前
        while (left < right && arr[right] >= key) {
            //左移
            right--;
        }

        //后面的数小于基数key时，替换left
        arr[left] = arr[right];

        //从前向后查找，如果前面的数小于等于基数key,则后移
        while (left < right && arr[left] <= key) {
            //右移
            left++;
        }

        //发现存在前面的数大于基数key时，替换
        arr[right] = arr[left];
    }

    arr[left] = key;
    //返回一次快排后基准数的位置
    return left;
}

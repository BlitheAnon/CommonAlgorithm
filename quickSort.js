
leftarr=[]
rightarr=[]
function quickSort(arr, _left, _right) {
    var left = _left;
    var right = _right;
    //初始化临时元素
    var temp = 0;
    //数组内至少有两个元素
    if (left < right) {
        temp = arr[left]; //设定第一个元素为基准元素
        while (left != right) { //从左右两边扫描，直到left=right
            //从右向左扫描，找到第一个小于基准元素的元素
            while (right > left && arr[right] >= temp) {
                //未找到继续左移
                right--
            }
            //成功找到后交换左元素
            arr[left] = arr[right]
            // arr[right]=temp

            //从左向右扫描，找到第一个大于基准元素的元素
            while (left < right && arr[left] <= temp) {
                //未找到继续右移
                left++
            }
            //成功找到后交换右元素
            arr[right] = arr[left]
        }

        //左右指针查找重合，将基准元素放回指针重合位置
        arr[right] = temp
        //或arr[right] = temp

        //对基准元素左边元素进行递归
        quickSort(arr, _left, left - 1)
        //对基准元素右边元素进行递归
        quickSort(arr, right + 1, _right)
        //为什么_left不能设为常量0,_right设为常量4
    }
}
arr = [5, 7, 1, 8, 4];
quickSort(arr, 0, arr.length - 1)
console.log(arr);

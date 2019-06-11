// 二分查找法将原本是线性时间提升到了对数时间范围，
// 缩短了搜索时间，
// 前提:在有序数据中进行查找。

//1.无重复，有序数组二分查找
//var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr1 = [1, 3, 5, 7, 8, 14];

//测试数据
console.log(binarySearch(arr1, 1,2,8));
console.log(binarySearch(arr1, 9));
console.log(binarySearch(arr1, 5,2,7));
console.log(binarySearch(arr1, 4));
console.log(binarySearch(arr1, 10));

//查找7在数组中首次出现的位置
function binarySearch(arr, target, start, end) {
    start = start || 0;
    end = end || arr.length - 1;
    while (start <= end) {
        //继续查找时，重新计算中间值
        let mid = Math.floor((end + start) / 2);
        //判断是否为中间值
        if (target == arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    //不存在时
    return -1;
}



//2.有重复数组，查找目标第一次出现的位置
var arr = [1, 3, 5, 7, 7, 7, 8, 14];
//测试数据
console.log(binarySearchDuplicate(arr, 1));
console.log(binarySearchDuplicate(arr, 14));
console.log(binarySearchDuplicate(arr, 5));
console.log(binarySearchDuplicate(arr, 7));

function binarySearchDuplicate(arr,target,start,end) {
    start=start||0;
    end=end||arr.length-1;
    while (start<=end) {
        let mid=Math.floor((start+end)/2);
        if (target==arr[mid]) {
            let temp=arr[mid];
            //判断前面是否有重复
            while (temp==arr[mid-1]) {
                mid--;
            }
            return mid;
        }else if (target>arr[mid]) {
            start=mid+1;
        }else {
            end=mid-1;
        }
    }

    return -1;
}

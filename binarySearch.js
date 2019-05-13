// 二分查找法将原本是线性时间提升到了对数时间范围，
// 缩短了搜索时间，
// 前提:在有序数据中进行查找。
//有重复数组，查找目标第一次出现的位置
var arr = [1, 3, 3, 5, 7, 7, 7, 7, 8, 14, 14];
var n = 10;
var target = 1;
console.log(binarySearch(arr, target, n));

function binarySearch(_arr, _target, _end) {
    //起始位置
    var begin = 0,
        end = _end,
        mid;
    while (begin <= end) {
        //中间位置
        mid = begin + Math.floor((end - begin) / 2);
        //查找到的中间值大于目标时，重设_end
        if (_target <= _arr[mid]) {
            end = mid - 1;
        } else if (_target > _arr[mid]) {
            begin = mid + 1;
        }
    }

    if (_arr[mid]==_target) {
        return mid;
    }
    // console.log(begin);
    // console.log(mid);
    // console.log(end);
}


//无重复数组，查找目标位置
// var arr1 = [1, 2, 3, 4, 5, 6];
// var n1 = 5;
// var target1 = 4;
//
// console.log(binarySearch(arr1, target1, n1));

//查找7在数组中首次出现的位置
// function binarySearch(_arr, _target, _end) {
//     //起始位置
//     var begin = 0,
//         end = _end,
//         mid;
//     while (begin <= end) {
//         //中间位置
//         mid = begin + Math.floor((end - begin) / 2);
//         //查找到的中间值大于目标时，重设_end为中间值
//         if (_target == _arr[mid]) {
//             return mid;
//         } else if (_target < _arr[mid]) {
//             end = mid - 1;
//         } else if (_target > _arr[mid]) {
//             begin = mid + 1;
//         }
//     }
// }

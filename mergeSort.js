//归并排序，将两个顺序序列合并成一个顺序序列的方法
//算法时间复杂度：O（nlogn），空间复杂度：O(N)
//算法流程：将数组分为左右两部分后，让两部分数据有序，再合并左右两部分
var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6];
console.log(mergeSort(arr));

//递归法
function mergeSort(array) {
    var len = array.length;
    //判断数组长度是否需要排序
    if (len < 2) {
        return array;
    }
    var middle = Math.floor(len / 2),
        //slice返回新数组，返回数组不包括end
        left = array.slice(0, middle),
        right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            //取数组第一个值，装入结果数组，会修改原数组（很重要）
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    //数组还存在值时
    // while (left.length)
    //     result.push(left.shift());
    // while (right.length)
    //     result.push(right.shift());
    //return result;

    //合并左右数组
    return result.concat(left).concat(right);
}

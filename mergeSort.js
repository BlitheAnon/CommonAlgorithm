//归并排序，将两个顺序序列合并成一个顺序序列的方法
//算法时间复杂度：O（nlogn），空间复杂度：O(N)
//算法流程：将数组分为左右两部分后，让两部分数据有序，再合并左右两部分
//参考底部重写部分
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
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}

//ture
console.log(typeof window === 'undefined');

//重写
//原理：分割数组为两个子数组(迭代，子数组再分...，由内到外)，最后得到的两个子数组排序后合并为最终结果
function mergeSort(arr) {
    let len = arr.length;
    //设置终止条件，very important
    if (len<2) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    //0-mid个元素，不包括mid
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    //迭代
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    let result = new Array();
    //左右数组存在时
    //每次取第一个
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    //连接左右数组
    return result;
}
//分析
//分割为：[8,9,1,7],[2,3,5,4,6]
//第一次得到result=[2,3,5,4,6]，原left,right为[8,9,1,7],[]
//第二次得到result=[2,3,5,4,6,8,9,1,7]
var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6];
console.log(mergeSort(arr));

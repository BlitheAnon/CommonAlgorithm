//每一次从待排序的数据元素中选出最小（或最大）的一个元素，
//存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，
//然后放到已排序序列的末尾。以此类推。
//选择排序是不稳定的排序方法。
//时间复杂度O(n^2）
//参考见底部重写更新
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

//重写选排：
//原理：外层循环每轮设第一个为最大值（或最小值），数组其余元素分别和最大值对比，每轮选出一个最值放前面
//大到小
function selectSort(arr) {
    for (var i = 0,len=arr.length; i < len-1; i++) {
        //每轮确定一个最大的数
        for (var j = i+1; j < len; j++) {
            let max=arr[i];
            if (arr[j]>max) {
                //交换
                arr[i]=arr[j];
                arr[j]=max;
            }
        }
    }
    return arr;
}

//小到大
function selectSort(arr) {
    for (let i = 0,len=arr.length; i < len-1; i++) {
        for (let j = i+1; j<len; j++) {
            let min=arr[i];
            if (arr[j]<min) {
                arr[i]=arr[j];
                arr[j]=min;
            }
        }
    }

    return arr;
}

var test_arr = [2,3,0,1,5,4];
console.log(selectSort(test_arr));

//每次把最大的数换到最后
//第二次遍历除去已经排好最大的的数，再次把第二大的换到最后
function bubble(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            var temp = arr[j]
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

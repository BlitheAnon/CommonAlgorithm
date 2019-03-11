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

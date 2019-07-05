function findKAccount(arr,k) {
    /*
    1.数组去重
    2.对数组大到小排序
    3.找到第k大的数
    4.计算原数组该数出现次数
    */

    //1.数组去重
    let set_arr=[];
    for (var a = 0; a< arr.length; a++) {
        if (set_arr.indexOf(arr[a])==-1) {
            set_arr.push(arr[a]);
        }
    }

    //2.对数组大到小排序
    //冒泡
    for (var i = 0; i < set_arr.length-1; i++) {
        for (var j = 0; j < set_arr.length-i-1; j++) {
            //相邻元素互换
            let temp;
            if (set_arr[j]<set_arr[j+1]) {
                temp=set_arr[j];
                set_arr[j]=set_arr[j+1];
                set_arr[j+1]=temp;
            }
        }
    }

    //3.找到第k大的数
    var target;
    for (var b = 0; b < set_arr.length; b++) {
        if (k-1==b) {
            target=set_arr[b];
        }
    }

    //4.计算原数组该数出现次数
    let count=0;
    for (var t = 0; t < arr.length; t++) {
        //判断数组元素是否改变
        if (target==arr[t]) {
            count++;
        }
    }

    return count;
}

let test=[1,2,4,4,3,5];
console.log(findKAccount(test,5));

//去除数组中为""的项
var trimArr=function(arr){
    arr.forEach(function(item,index){
        if (item=='') {
            arr.splice(index,1)
            trimArr(arr)
        }
    })
}

var testArr=['',1243,'','dfd','']
trimArr(testArr)
testArr

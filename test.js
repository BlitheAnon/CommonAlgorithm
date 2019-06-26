function rgb2hex(sRGB) {
    //var reg = /rgb\(\d+,\s*\d+,\s*\d+\)/
    var reg = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/

    //var reg=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    //取得匹配数组
    var result = sRGB.match(reg)
    return result

    //return reg.test(sRGB)
}


function rgb2hex(sRGB) {
    var reg = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/
    //取得匹配数组
    var result = sRGB.match(reg)
    console.log(result);
    if (result) {
        var output = "#"
        for (var i = 1; i < 4; i++) {
            var item = parseInt(result[i])
            if (item <= 255 && item >= 0) {
                output += (item < 15 ? 0 + item.toString(16) : item.toString(16))
            } else {
                return sRGB
            }
        }

        return output
    } else {
        return sRGB
    }

    //return reg.test(sRGB)
}

function getUrlParam(sUrl, sKey) {
    //去除无关字符
    var mainUrl = sUrl.split('?')[1].split('#')[0]
    var resultObj = {}
    var resultArr = []
    var resultValue = ""
    var arr = mainUrl.split('&').sort()
    var count = 0
    var tempKey=''
    for (var i = 0; i < arr.length; i++) {
        //取得key
        var key = arr[i].split('=')[0]
        //取得value
        var value = arr[i].split('=')[1]


        //参数存在，且和key匹配
        if(sKey){
            if (key === sKey) {
                resultValue = value
                count++
                resultArr.push(value)
            }
        }else{
            if(i+1<arr.length){
                var key1 = arr[i+1].split('=')[0]
                var value1 = arr[i+1].split('=')[1]

                //参数不存在，但存在同名参数
                if(key===key1){
                    if(tempKey===key){
                        resultArr.push(value1)
                    }
                    //跳过一次遍历，数组每次添加两个value
                    i++
                    tempKey=key1
                    count++
                    resultArr.push(value)
                }else{
                    resultArr.push()
                }

            }



        }


        resultObj[key] = value
    }

    console.log('count:'+count)
    if (sKey) {
        //指定参数时

        //判断是否存在多个重名key
        if (count > 0) {
            return resultArr
        } else {
            return resultValue
        }

    } else {
        if (count > 0) {
            return resultArr
        } else {
            return resultObj
        }
    }


}

function sleep(ms){
return new Promise((resolve)=>setTimeout(resolve,ms));
}
async function test(){
var temple=await sleep(3000);
console.log(1111);
return temple;
}
test();

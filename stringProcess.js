//字符串处理面试题, 2.5h
//1.解析URL参数为对象
function parseParam(url) {
    let needed = url.split('?')[1].split('&');
    let obj = new Object();
    needed.forEach((item) => {
        //判断是否存在=
        if (item.indexOf('=') != -1) {
            let each = item.split('=');
            let value = decodeURIComponent(each[1]);
            //判断是否已存在key
            if (obj.hasOwnProperty(each[0])) {
                if (obj[each[0]] instanceof Array) {
                    obj[each[0]].push(value);
                } else {
                    let temp = [obj[each[0]]];
                    temp.push(value);
                    obj[each[0]] = temp;
                }
            } else {
                obj[each[0]] = value;
            }
        } else {
            obj[item] = true;
        }
    })
    console.log(obj);
}

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url);
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

//2.模板引擎实现
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
}
console.log(render(template, data)); // 我是姓名，年龄18，性别undefined

function render(template, data) {
    //正则匹配
    // let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
    // const reg = /\{\{\w+\}\}/;
    const reg = /\{\{(\w+)\}\}/;

    // console.log(template.replace(reg,'shit'));
    // console.log(reg.test(template));
    // console.log(reg.exec(template));

    //思考：为什么不能
    //reg=/\{\{(\w+)\}\}/g,全局匹配会一次性匹配所有{{name}},replace后改变所有
    //reg=/\{\{\w+\}\}/，exec方法得到数组不好含arr[1]='name'的值
    // console.log(reg.exec(template));
    // let test='bar foo bar foo'.replace(/(bar) (foo) \1 \2/,'$2$1$2$1')
    // console.log(test);

    if (reg.test(template)) {
        //取得中间匹配值
        const name = reg.exec(template)[1];
        //替换对象内name
        template = template.replace(reg, data[name]);
        return render(template, data);
    }

    return template;
}


//3.转化为驼峰命名
//测试无括号匹配时，能否在replace中使用'$1'，不能
var s1 = "get-element-by-id"
console.log(toCammel(s1));

// 转化为 getElementById
function toCammel(str) {
    //方法一无效
    const reg = /(-\w)/g;
    str = str.replace(reg, ($1, $0) => {
        console.log($0);
        return $1.slice(1).toUpperCase();
    });
    return str;
}

//4.查找字符串中出现最多的字符和个数
//例: abbcccddddd -> 字符最多的是d，出现了5次
function findMaxCount(str) {
    //思想：循环字符，将每个字符和对应个数存储到对象中，按个数重大到小存储
    //存储结果例如：{a:3,b:2}
    //设一个临时最大值
    let maxValue = 0;
    let maxName = '';
    var obj = {};
    while (str.length) {
        let char = str.substring(0, 1);
        //判断数组中是否存在对象
        obj.hasOwnProperty(char) ?
            obj[char] = obj[char] + 1 :
            obj[char] = 0;
        //判断是否需要更新最大值
        if (obj[char] > maxValue) {
            maxValue = obj[char];
            maxName = char;
        }
        //缩小原str
        str = str.substring(1);
    }
    console.log(maxName, maxValue);
}

let str = "abcabcabcbbccccc";
console.log(findMaxCount(str));

//正则方法
function findMaxCount(str) {
    var maxNum = 0;
    var maxName = '';
    //排列后合并
    str = str.split('').sort().join('');
    const reg = /(\w)\1+/g;
    str.replace(reg, ($0, $1) => {
        if ($0.length > maxNum) {
            maxNum = $0.length;
            maxName = $1;
        }
    });

    // return maxName+''+maxNum;
    console.log(maxName, maxNum);
}


//5.字符串查找
//请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，
//并返回第一次出现的位置（找不到返回 -1）。
//原理：外层for循环source,先判断target[0]是否匹配，
//匹配后，设temp=true，并从1开始循环target，同时增大temp_i=i+1，一旦不相等设temp=false
//内层for循环后添加temp判断，输出匹配索引

isContain('34', '1234567');
isContain('35', '1234567');
isContain('355', '12354355');
isContain('35','1234343');
//注意： for in循环中的index为string类型
function isContain(target,source) {
    for (let i in source) {
        if (target[0]===source[i]) {
            let temp_i=parseInt(i)+1;
            let temp=true;
            for (let j = 1,len=target.length; j < len; j++,temp_i++) {
                if (target[j]!=source[temp_i]) {
                    temp=false;
                }
            }

            if (temp) {
                console.log(i);
                return;
            }
        }
    }
    console.log(-1);
    return -1;
}
function isContain(a, b) {
  for (let i in b) {
    if (a[0] === b[i]) {
      let tmp = true;
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false;
        }
      }
      if (tmp) {
        // return i;
        console.log(i);
        return;
      }
    }
  }
  // return -1;
  console.log(-1);
}



//6.实现千位分隔符
//// 保留三位小数
//测试replace $&

parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321'
function parseToMoney(num) {
    //toFixed，四舍五入为指定小数位数的数字
    num = parseFloat(num.toFixed(3));
    //数组解构，分为整数，小数部分
    let [integer, decimal] = String.prototype.split.call(num, '.');
    //正则处理整数部分
    integer = integer.replace(/\d(?=((\d{3})+$))/g, '$&,');
    console.log(integer + '.' + (decimal ? decimal : ''));
    //console.log(integer,decimal);
}

function parseToMoney(str) {
    // 仅仅对位置进行匹配
    let re = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(re, ',');
}

//7.电话，邮箱，身份证判断
function phoneCheck(phone) {
    //以1开头,接着为[34578]，最后为9位数字，一共11位
    const reg = /^1[34578]\d{9}$/;
    return reg.test(phone);
}
console.log(phoneCheck('1872007127'));

function emailCheck(mail) {
    //匹配a-z,A-Z,0-9,_和-，一到N次,
    // const reg = /^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
    // const reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
    var regx = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
    var reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-]+)+$/;

    return reg.test(mail);
}
console.log(emailCheck('blitheanon@qq.com'));
console.log(emailCheck('bbb@bb.bb.com'));
console.log(emailCheck('bbb@bb.'));

//正则末尾的$有结束判断的意思
function idCheck(id) {
    //分析：15位数字，18位数字，17位数字开头+18位x
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    const reg=/^((\d{15})|(\d{18})|(\d{17}(\d|X|x)))$/;
    return reg.test(id);
}

console.log(idCheck('130321200101019530xxx'));

//javaSctipt数据类型7种: Number, String, Boolean, Null, Undefined, Object, Symbol
//基本数据类型6种：String Number Boolean Null Undefined Symbol(es6)
//引用类型有这几种：Object、Array、RegExp、Date、Function、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)。 
//复杂数据类型1种：Object
//js类型判断，instanceof,typeof
//typeof一元运算符，用来返回操作数类型的字符串

//typeof可能返回值有
/*
'undefined'
'boolean'
'string'
'number'
'object'
'function'
*/

//typeof 的能力有限，其对于null, Date、RegExp类型返回的都是"object"
/*
typeof [] // 'object'
typeof null // 'object'
typeof {}; // "object"
typeof []; // "object"
typeof new Date(); // "object"
*/

//typeof只有一个实际应用场景，就是用来检测一个对象是否已经定义或者是否已经赋值。
//而这个应用却不是来检查对象的类型。


//instanceof 用来比较一个对象是否在其原型链原型构造函数的属性。
//其语法是object instanceof constructor
//左对象，右函数
//只有在比较自定义的对象时才有意义。如果用来比较内置类型，将会和 typeof 操作符 一样用处不大。


//Object.prototype.toString.call()
//实例
//Object.prototype.toString.call([1,3,4]);
//"[object Array]"

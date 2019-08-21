//实现JSON.parse
//json字符串转json对象
var json='{"name":"shit","age":11}';
var obj=eval("("+json+")");
console.log(obj);
console.log(obj.name,obj.age);

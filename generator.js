/* generator函数使用:
1、分段执行，可以暂停
2、可以控制阶段和每个阶段的返回值
3、可以知道是否执行到结尾
*/
//把异步操作写在yield语句里面，等到调用next方法时再往后执行
function* g() {
    var o=1;
    yield o++;
    yield o++;
}

var gen=g();
console.log(gen.next());
var xxx=g();
console.log(gen.next());
console.log(xxx.next());
console.log(gen.next());

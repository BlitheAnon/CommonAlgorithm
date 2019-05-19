//js继承实现
//父类
function Animal(name) {
    //属性
    this.name=name||'animal';
    //方法
    this.eat=function() {
        console.log(this.name+' is eating');
    };
}

//通过原型链给父类添加方法
Animal.prototype.sleep=function() {
    console.log(this.name+' is sleeping');
};
//1.prototype原型链继承实现
function Dog() {

}

//Dog类取得父类的实例
Dog.prototype=new Animal();
Dog.prototype.name='dog';

var dog=new Dog();
console.log(dog.name);
dog.eat();
dog.sleep();
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);


//2.组合继承
function Cat(name) {
    //将Animal上下文this改为cat对象的
    Animal.call(this);
    this.name=name||'cat';
}

Cat.prototype=new Animal();
//改变构造函数指向
Cat.prototype.constructor=Cat;

var cat=new Cat();
console.log(cat.name);
cat.eat();
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

//3.寄生组合继承
function Panda(name) {
    Animal.call(this);
    this.name=name||'panda';
}

(function() {
    //无实例类
    var Super=function() {

    };

    Super.prototype=Animal.prototype;
    Panda.prototype=new Super();
})();

var panda=new Panda();
console.log(panda.name);
panda.sleep();
console.log(panda instanceof Animal);
console.log(panda instanceof Panda);

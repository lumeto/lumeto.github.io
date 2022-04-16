## this全面解析

### 前言
this 关键字在 Javascript 中非常常见,但是很多开发者很难说清它到底指向什么。大部分人会从字面意思上去理解 this,认为 this 指向函数自身,实际上this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

::: tip
总结: 函数被调用时发生 this 绑定，this 指向什么完全取决于函数在哪里被调用。
:::

### this绑定规则
#### 默认绑定（严格/非严格模式）
- 独立函数调用： 独立函数调用时 this 使用默认绑定规则，默认绑定规则下 this 指向 window（全局对象）。
- 严格模式下： this 无法使用默认绑定，this 会绑定到 undefined。

**独立函数调用**
```js
  function foo() {
    console.log(this.a);
  }
  var a = 2;
  foo(); // 2
```
**严格模式下：**
```js
function foo() {
  "use strict";
  console.log(this); //undefined
  console.log(this.a); //Uncaught TypeError: Cannot read property 'a' of undefined
}
var a = 2;
foo();
```
**注意下边两种情况**
```js
var age = 18;
var obj = {
  name: "heyushuo",
  age: 25,
  fn: function () {
    function sayName() {
      console.log(this); //window
      console.log(this.age); // 18
    }
    sayName();
  },
};
obj.fn();    // == windo obj.fn();
``` 
函数 sayName 虽然是在 obj.fn 内部定义的，但是它仍然是一个独立函数调用，this 仍然指向 window。
```js
var a = "global";
var obj = {
  a: 2,
  foo: function() {
    console.log(this.a); //global
  }
};
var bar = obj.foo; // 函数别名！
bar();
```
虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是函数本身，因此此时的
bar() 其实是一个不带任何修饰的独立函数调用，因此应用了默认绑定。

#### 隐式绑定
当函数引用有`上下文对象`时，隐式绑定规则会把函数中的this绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。
```js
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2
```
> 隐式丢失

被隐式绑定的函数特定情况下会丢失绑定对象，应用默认绑定，把this绑定到全局对象或者undefined上。
```js
// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身。
// bar()是一个不带任何修饰的函数调用，应用默认绑定。
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // 函数别名

var a = "oops, global"; // a是全局对象的属性

bar(); // "oops, global"
```
参数传递就是一种隐式赋值，传入函数时也会被隐式赋值。回调函数丢失this绑定是非常常见的。
```js
function foo() {
    console.log( this.a );
}

function doFoo(fn) {
    // fn其实引用的是foo
    
    fn(); // <-- 调用位置！
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // a是全局对象的属性

doFoo( obj.foo ); // "oops, global"

// ----------------------------------------

// JS环境中内置的setTimeout()函数实现和下面的伪代码类似：
function setTimeout(fn, delay) {
    // 等待delay毫秒
    fn(); // <-- 调用位置！
}
```

#### 显式绑定
通过`call()` 或者 `apply()`方法。第一个参数是一个对象，在调用函数时将这个对象绑定到this。因为直接指定this的绑定对象，称之为显示绑定。
```js
function foo() {
 console.log(this.a);
}
var obj = {
 a: 2
};
foo.call(obj); // 2   调用foo时强制把foo的this绑定到obj上
```
显示绑定无法解决丢失绑定问题。

解决方案：
- 1、硬绑定

创建函数bar()，并在它的内部手动调用foo.call(obj)，强制把foo的this绑定到了obj。
```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
};

var bar = function () {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2

// 硬绑定的bar不可能再修改它的this
bar.call(window); // 2
```
典型应用场景是创建一个包裹函数，负责接收参数并返回值。
```js
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = function() {
    return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

- 2、API调用的“上下文”


  JS许多内置函数提供了一个可选参数，被称之为“上下文”（context），其作用和bind(..)一样，确保回调函数使用指定的this。这些函数实际上通过call(..)和apply(..)实现了显式绑定。
```js
function foo(el) {
  console.log( el, this.id );
}

var obj = {
  id: "awesome"
}

var myArray = [1, 2, 3]
// 调用foo(..)时把this绑定到obj
myArray.forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome
```

#### new 绑定
使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

- 创建（或者说构造）一个全新的对象。
- 这个新对象会被执行 [[ 原型 ]] 连接。
- 这个新对象会绑定到函数调用的 this。
- 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```js
function foo() {
  this.name = "zhangsan";
  this.age = 25;
}
foo.prototype.sayName = function () {
  console.log(this.name + this.age);
};
var bar = new foo();

console.log(bar); //{name: "zhangsan", age: 25}
//这个新对象会绑定到函数调用的 this。所以此时的this就是bar对象
console.log(bar.age); // 25
```

### 四种绑定关系的优先级
判断this,可以按照下面的顺序来进行判断：

1、函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。
```js
var bar = new foo()
```
2、函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是指定的对象。
```js
var bar = foo.call(obj2)
```
3、函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上下文对象。
```js
var bar = obj1.foo()
```
4、如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到全局对象。
```js
var bar = foo()
```
### this词法

ES6新增一种特殊函数类型：箭头函数，箭头函数无法使用上述四条规则，而是根据外层（函数或者全局）作用域（**词法作用域**）来决定this。

- foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改(new也不行)。
```js
function foo() {
  // 返回一个箭头函数
  return (a) => {
    // this继承自foo()
    console.log(this.a);
  };
}

var obj1 = {
  a: 2,
};

var obj2 = {
  a: 3,
};

var bar = foo.call(obj1);
bar.call(obj2); // 2，不是3！
```
ES6之前和箭头函数类似的模式，采用的是词法作用域取代了传统的this机制。

```js
function foo() {
  var self = this; // lexical capture of this
  setTimeout(function () {
    console.log(self.a); // self只是继承了foo()函数的this绑定
  }, 100);
}

var obj = {
  a: 2,
};

foo.call(obj); // 2
```
代码风格统一问题：如果既有this风格的代码，还会使用 seft = this 或者箭头函数来否定this机制。

- 只使用词法作用域并完全抛弃错误this风格的代码；
- 完全采用this风格，在必要时使用bind()，尽量避免使用 self = this 和箭头函数。

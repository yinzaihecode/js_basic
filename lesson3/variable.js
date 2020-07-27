// main.js


https://github.com/yinzaihecode/js_basic.git

// lesson3

// 1. Use strict
// added in ES5
'use strict';

// 2. Variable
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name)

        // console.log(globalName};
}
                            


    console.log(name)
    console.log(globalName);

    
{
    

}
    
// var never use! (var hoisting)
// hoisting이 머야? -> 
// 어디에 선언하던지, 선언을 제일 위로 끌어올려주는것을 말합니다.




//let을 써라 변경이 가능 함. - Mutable data
//const 할당하면 절대 안바뀜 - Immutable.

// 3. Constants
// favor immutable data type always for a few reasons
// - security
// - Thread safety
// - redce human mistakes

// const daysInWeek = 7;
// const maxNumber = 5;

// 4. Variable types
// primitive, single item: Number, string, boolean, null, undefined, Symbol
// object, box container.
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const bigInt = 12389012389021389120389n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;


// 백틱을 잘 쓰자!!
// 백틱 == template literals, template strings
// 백틱의 용도? : ''+'' 이짓 안해도 됨, 포맷팅 그대로 사는 장점

const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false:0, null, undefined, NaN, ''
//true: any other value


// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create un ique identifers for objects

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//false


const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
//true
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// ************************************

let text = 'hello';
console.log(`value: ${text}, type:${typeof text}`);
// text 1;
// ERROR -_- text 1;


//5. Dynamic typing: dynamically typed langauge

// let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1 ;

console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;

console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'

console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));


// hello
// 01234


// Object, real-life Object, data structure
const ellie = { name: 'ellie', age: 20};

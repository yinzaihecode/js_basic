// // 1. String concatenation

// console.log('my' + ' cat');
// console.log('1' + 2;
// console.log(string literals:


//     1 + 2 = ${1+2};

//     console.log("ellie's \n\ tbook");

// //2. numeric operators

// // +
// // -
// // /
// // *
// // %
// // **


// //3. increment and decrement operators

// let counter = 2;
// const preIncrement = ++counter;
// const postIncrement = counter++;

// postIncrement = counter;

// //4. Assignment Operators
// let x = 3;
// let y = 6;

// x += y;
// x -= y;
// x *= y;
// x /= y;


// 5. Comparison operators

// // <
// // <=
// // >
// // >=

// // (important)
// 6. Logical operators: ||(OR), &&(AND) !(NOT)
// const value1 = false;
// const value2 = 4 < 2;

// || (OR)
// console.log(`or: ${value1} || value2 || check()}`);
// // 연산이 무거운애들은 제일 뒤에다 배치하는게 효율적인 코드 작성

// // AND도 heavy opr 뒤에

// 많이쓰는 조건문 패턴

// if (nullobject != null){
//     nullobject.something;
// }



// funtion check() {
//     for (let  )
// }

// // 7. equality

// loose equality, with type conversion

// // loose
// console.log(stringFive == numberFive);
// console.log(stringFive != numberFive);

// // strict equal recommendded

// console.log(stringFive === numberFive);
// console.log(stringFive !== numberFive);

// // object equality by reference


// // equality 문제!!
 
// console.log(0 == false); T
// console.log(0 === false); F
// console.log('' == false); T 
// console.log('' === false); F

// console.log(null == undefined); T
// console.log(null === undefined); F (type)


// // -------------

// // conditional if operators


// const name = 'df';
// if (name == 'ellie') {
//     console.log('Welcome, Ellie!');
// } else if (name === 'coder') {
//     console.log('You are amazing coder');
// } else {
//     console.log('unknown');
// }


// // 9.ternary Operator : ?
// // condition ? value1 : value2;

// console.log(name === 'ellie' ? 'yes' : 'no');

// //10. Switch statement
// // use for multiple if check
// // use for enum-like value check 
// // use for multiple type check in TS

// // TYPE SCRIPT에서 정해져있거나,enum 검사

// const browser = "IE";
// switch (browser) {
//     case 'IE':
//         console.log('go away!');
//         break;
//         case 'Chrome':
//         case 'Firefox':
//             console.log('I love you!');
//             break;
//         default:
//             console.log('same all!');
//         break;
// }


// // 11. While Loops
// // while loop, while the condition is truthy
// // body code is executed.

// let i = 3;
// while (i > 0) {
//     console.log(`while: ${i}`);
//     i--;
// }


// // do while loop, body code is executed first,
// // then check the condition
// do {
//     console.log(`do while ${i}`)
//     i--;
// } while (i > 0);


// // for loop, for(begin; condition; step)
// for (i=3; i>0; i--){
//     console.log(`for: ${i}`);
// }

// for (let i=3; i>0; i=i-2){
//     // inline variable CSSStyleDeclaration
//     console.log(`inline variable for : ${i}`);
// }

// // nested loops는 피할것.!
// for (let i = 0; i < 10; i++){
//     for (let j = 0; j <10; j++){
//         console.log(`i: ${i}, j:${j}`)
//     }
// }


break, continue

// break는 loop을 완전히 끝냄
// continue는 지금것만 스킵하고 넘어감
짝수만 출력 continue 사용
// 홀수일때 컨티뉴

for (let i=0; i<11; i++){
    if (i%2 !==0) {
        continue;
    }
    console.log(`q1.${i}`);
}

// 8을 만나면 그만

for (let i=0; i<11; i++){
    if (i > 8){
        break;
    }
    console.log(`q2.${i}`);
}


 
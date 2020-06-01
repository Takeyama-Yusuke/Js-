'use strict'

const num1 = [1, 2];
const num2 = [3, 4];
const num3 = [5, 6];

const res1 = [...num1, ...num2];  //[1, 2, 3, 4]と出力される
const res2 = [...num1, ...num2, ...num3]; //[1, 2, 3, 4, 5, 6]と出力される

console.log(res1);
console.log(res2);
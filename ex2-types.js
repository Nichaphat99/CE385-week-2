const text = "Nicha";
const number = 15;
const student = true;
let undefinedValue;
const result = null;
const colors = ["red", "pink", "black"];

console.log("ค่า:", text, "| ชนิด:", typeof text);
console.log("ค่า:", number, "| ชนิด:", typeof number);
console.log("ค่า:", student, "| ชนิด:", typeof student);
console.log("ค่า:", undefinedValue, "| ชนิด:", typeof undefinedValue);
console.log("ค่า:", result, "| ชนิด:", typeof result);
console.log("ค่า:", colors, "| ชนิด:", typeof colors);


console.log(typeof null); 

console.log(typeof undefinedValue);

console.log(typeof Number("abc")); 
console.log(Number("abc")); 

const inputAge = "20";
const inputScore = "85.5";


const age = Number(inputAge) + 5;
console.log(age); 

const score = Number(inputScore);
console.log(score.toFixed(1)); 

console.log(inputAge === 20);
console.log(Number(inputAge) === 20);  
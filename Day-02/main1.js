//----- let -- var ------ const -----
// var - có thể khai báo lại - gán lại giá trị
var number = 10;
console.log(number); // output: 10
var number = 20;
console.log(number); // output: 20
number = 30;
console.log(number);
//ES6
// let - chỉ có thể gán lại giá trị
let myString = "hello";
console.log(myString);
myString = "hi";
console.log(myString);
//const không thể gán lại giá trị cũng như khai báo lại
const PI = 3.1415;
console.log(PI);
// PI = 3.23;
// Arrow Function (Hàm mũi tên)
const myFunction = (a, b) => {
  //Khối lệnh
  return a + b;
};
console.log(myFunction(30, 15));

//Template literals
let name = "Tu";
let age = 16;
console.log(`Tên: ${name}, Tuoi x2: ${age * 2}`);
//Destructuring
const student = {
  studentName: "Nguyen Hai Nam",
  studentAge: 16,
};
const { studentName, studentAge } = student;
console.log(studentName, studentAge);
//Tìm hiểu thêm Spread & Rest Operators
//Ôn tập về mảng
let fruits = ["Cherry", "Apple"];
console.log(fruits);

//push - thêm phần tử vào cuối mảng
fruits.push("Banana");
console.log(fruits); // output: ["Cherry", "Apple", "Banana"]
// pop - Xoá phần tử cuối mảng
fruits.pop();
console.log(fruits); // output: ["Cherry", "Apple"]
// map()
//Thực hành
//Cho 1 mảng số, trả về mảng số sao cho các giá trị được nhân lên 2
const numbers = [12, 11, 8, 6, 86, 68];
// output: doubleNumbers = [24, 22, 16, 12, 172, 136]
//Cách 1: for loop
let doubleNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);
//Cách 2 - map()
const doubleNumbers2 = numbers.map((number) => number * 2);
console.log(doubleNumbers2);
//filter
//Thực hành
//Cho 1 mảng số, lọc ra các số chẵn từ mảng dưới
const numbers2 = [12, 11, 21, 33, 8, 6, 86, 68];
//output: [12, 8, 6, 86, 68]
//Cach 1: for loop
let evenNumbers = [];
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    evenNumbers.push(numbers2[i]);
  }
}

console.log(evenNumbers); //output: [12, 8, 6, 86, 68]
const evenNumbers2 = numbers2.filter((number) => number % 2 === 0);
console.log(evenNumbers2); //output: [12, 8, 6, 86, 68]

//find() - tìm phần tử đầu tiên thoả mãn điều kiện
//thực hành:
// tìm phần tử đầu tiên lớn hơn 21  trong mảng output: 33
const numbers3 = [12, 11, 21, 33, 8, 6, 86, 68];
const greaterThan21 = numbers3.find((number) => number > 21);
console.log(greaterThan21); //output: 33

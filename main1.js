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

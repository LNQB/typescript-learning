// NUMBER
// let sotunhien: number;
// sotunhien = 1;
// console.log(">>>So Tu Nhien: ", sotunhien);

// String
// let name1: string = `"Le nguyen quoc bao"`;
// let name2: string = `Hello ${name1}`; //template strings
// console.log(name2);

//Boolean
// let status1: boolean = true;
// console.log("Check status1: ", status1);

//Object
// let person:{
//     name:string,
//     age:number
// } = {
//     name: "Le Nguyen Quoc Bao",
//     age: 22
// }
// console.log(person);

//Array
// let test: (string | number)[] = ['bao']; // mẹo để đóng ngoặc tròn nhanh là shift + 9
// test.push('bao2');
// test.push(24);
// console.log(">>>Test: ", test);


//Tuple Type nó cũng giống như array nhưng mà nó phải theo trình tự 
// let test6: [boolean, string, number] = [true, 'bao', 22];
// console.log(test6);

//Enum Type => hơi rối

//Any Type => không nên lạm dụng vì nếu dùng nhiều thì nó giống như js
// let namev2: any = "bao";
// namev2 = 2;
// namev2 = true;
// console.log(namev2);


//Type Aliases
type superType = string | boolean | number;
let name4:superType = true;


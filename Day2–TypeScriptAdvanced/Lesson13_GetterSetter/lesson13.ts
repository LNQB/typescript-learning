class Person2{
    private _age: number;
    private _firstName: string;
    private _LastName: string;

  constructor(age: number, firstName: string, LastName: string) {
    this._age = age
    this._firstName = firstName
    this._LastName = LastName
  }    

  get age(){
    return this._age;
  }

  set age(age2: number){
    if(age2 < 0 || age2 > 150){
        throw Error("Invalid age");
    }
    this._age = age2;
  }
}

let person2 = new Person2(22, "quocbao", "le nguyen");
let checkAge = person2.age; // getter
person2.age = 25; // setter
console.log(">>>ketqua: ", person2);
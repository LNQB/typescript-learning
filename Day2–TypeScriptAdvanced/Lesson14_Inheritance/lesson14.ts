class Person3{
    _firstName: string;
    _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName
    this._lastName = lastName
  }    

  getFullName(){
    return `${this._firstName} ${this._lastName}`;
  }

  getDescription(){
    return `This is ${this._firstName} ${this._lastName}`
  }
}

// để kế thừa 1 class chúng ta sử dụng extends

class Employee1 extends Person3{
    private _jobTitle: string;

  constructor(
    firstName:string,
    lastName: string,
    jobTitle: string) {
        // call constructor of the Person3 class
    super(firstName, lastName)
    this._jobTitle = jobTitle
  }    
  // overwrite
  getDescription(){
    return `${super.getDescription()} from cha - Le Nguyen Quoc Bao`
  }
}

let employee = new Employee1("quocbao", "lenguyen", "sinh vien");
console.log(employee.getFullName());
console.log(employee.getDescription());

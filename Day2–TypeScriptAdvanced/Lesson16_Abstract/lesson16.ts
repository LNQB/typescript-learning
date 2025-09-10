abstract class Employee{
    firstName: string;
    lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }    

  abstract getSalary(): number;

  get FullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string{
    return `${this.FullName} make ${this.getSalary()} a month.`;
  }
}

// đối với class abtract thì không thể tạo mới đối tượng từ nó
// dùng kế thừa để sử dụng abstract class

class FullTimeEmployee extends Employee{
    salary: number;
  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName),
    this.salary = salary
  }

    // cần viết method này vì nó được khai báo abstract ở trên
    getSalary(): number {
        return this.salary;
    }

}

class Contractor extends Employee{
    rate: number;
    hours: number;

  constructor(firstName: string, lastName: string, rate: number, hours: number) {
    super(firstName, lastName),
    this.rate = rate,
    this.hours = hours
  }  
  getSalary(): number {
      return this.rate * this.hours;
  }
}

const test1 = new FullTimeEmployee("quocbao", "lenguyen", 1000);
const test2 = new Contractor("quốc bảo", "lê nguyễn", 3, 4);
console.log(">>>ketqua: ", test1.getSalary());
class Person{
    ssn: string;
    firstName: string;
    lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn
    this.firstName = firstName
    this.lastName = lastName
  }    
    
  getFullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }
}

let lnqb = new Person("123", "Quốc Bảo", "Lê Nguyễn");
console.log(">>>ket qua: ", lnqb.getFullName());
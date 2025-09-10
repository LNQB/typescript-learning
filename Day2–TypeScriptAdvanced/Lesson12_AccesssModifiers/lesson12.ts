class Employee{
    public empCode: string;
     empName: string;

  constructor(empCode: string, empName: string) {
    this.empCode = empCode
    this.empName = empName
  }    
}

let emp = new Employee("aa", "bbb");
emp.empCode = "lnqb";
emp.empName = "qb";
console.log(">>>KQ: ", emp);

// public thì nó có thể truy cập ở bất kì nơi nào
// private thì giới hạn quyền truy cập biến ở trong cùng class. Bên ngoài class thì error
// protected thì giống private nhưng lớp con kế thừa sẽ không truy cập được

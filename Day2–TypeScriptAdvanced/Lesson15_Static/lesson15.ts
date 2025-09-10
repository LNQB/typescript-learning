class Circle{
    static pi: number = 3.14;
    public test: number = 69; // nếu mà không phải static thì phải tạo đối tượng và không thể truy cập được vào function có static

    static caculatateArea(radius: number){
        return this.pi * radius * radius;
    }
}

let doituong = new Circle();
console.log(">>>ketqua: ", doituong.test);
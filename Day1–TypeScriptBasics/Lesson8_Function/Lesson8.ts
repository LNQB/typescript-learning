function sum (a: number, b: number): number{
    return a+b;
}

//anymoust function () => {}
const sum2 = (a:number, b:number): number => {
    return a + b;
}

console.log(">>>SUM = ", sum2(3,4));

// lưu ý trong function phải định nghĩa cho từng biến rồi định nghĩa type cho hàm trả về luôn
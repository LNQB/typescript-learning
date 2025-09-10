const sum2 = (a:number, b:number, c?:number) => {
    if(c) return a + b + c;
    return a + b;
}

console.log(">>>Check SUM: ", sum2(2, 3), sum2(2, 3, 6));

const sum3 = (a:number, b:number, c = false) => {
    if(c === false){
        return a + b;
    }
    return a - b;
}

console.log(">>>Check sum: ", sum3(3, 4), sum3(1, 2, true));
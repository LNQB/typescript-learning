let discount: number;
let itemCount = 11;
if(itemCount > 0 && itemCount <= 5){
    discount = 10;
}
else if(itemCount > 5 && itemCount <= 10){
    discount = 20;
}
else{
    discount = 30;
}
console.log(`Bạn có thể ${discount}% discount`);
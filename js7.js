const num = 123 ;
const num1 = new Number(123);

console.log(typeof num)
console.log(typeof num1)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN);

if(Number.isNaN(num1)) {
    console.log('실행')
}

const num2 = 123456.1256; 
console.log(num2.toFixed(1)) 
console.log(num2.toString()) 
console.log(num2.toPrecision(5))

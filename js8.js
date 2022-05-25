console.log(Math.PI) 
//toFixed(자리수)
console.log(Math.ceil(10.53)) //올림 11
console.log(Math.floor(10.53))  //내림 10
console.log(Math.round(10.53)) //반올림 11

console.log(Math.min(1,5,10)) // 1
console.log(Math.max(1,5,10)) // 10

console.log(Math.round(Math.random() * 105)) // 0- 1 


// random 이용해서 5자리 인증번호출력 

let pass='';
for(let i=1 ; i<6; i++){
    pass+=(Math.floor(Math.random()*10))
}
console.log(pass)

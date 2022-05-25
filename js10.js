// 날짜 시간 Date 객체 

const now = new Date();

console.log(now.getFullYear()) // 년
console.log(now.getMonth()) // 월 0 1 2 3 4 5
console.log(now.getDate()) // 날짜
console.log(now.getTime());// 시간
let h = now.getHours();// 시간
let m = now.getMinutes();// 분
let s=  now.getSeconds();// 초 

let timebox = `${h} : ${m} : ${s}`
console.log(timebox)






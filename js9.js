const text = 'Hello World!';
console.log(text.length);
console.log(text.charAt(0));
console.log(text.charAt(6));
console.log(text.indexOf('W')) ; 
console.log(text.lastIndexOf('l'));
console.log(text.includes('h'));
console.log(text.toUpperCase());
console.log(text.substring(2, 6));
console.log(text.slice(2,6));

const spacetxt1 = '       aaaa      bbbb   ';
console.log(spacetxt1.trim());
const spacetxt2='aaaa-bbbb-cccc-dddd';
console.log(spacetxt2.split('-'));
console.log(spacetxt2.split('-',2))

const textSample = "가나다라마바사 AB2CDEFG 123456 가나다라마바사";
 console.log(textSample.slice(5,-10))
 console.log(textSample.substring(5,-10))

 console.log(textSample.slice(-2))
 console.log(textSample.substring(-2))

  //slice(n) n 번째 인덱스 부터 끝까지 추출  
  //slice(n , m) n번째 부터 m 까지 추출 
  //slice 음수면  뒤부터 계산 
 //substring   음수가 오면 0 


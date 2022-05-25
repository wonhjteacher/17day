class User {
    constructor(name,age) {
        this.name=name;
        this.age=age;  
    }
    hi(){
        console.log('이름은'+this.name+'나이는'+this.age)
    }
}

const user1 = new User('홍길동',10) ; 
const user2 = new User('김철수',20) ; 
console.log(user1)
console.log(user2)
user2.hi()

//extends  

class AddUserLoction extends User {
    constructor(name,age,location){
        super(name,age);  
        this.location = location ;
    }
    hi(){
        console.log('유저의 위치는' + this.location) //덮어쓰기 오버라이딩
    }
    
}
const user3 = new AddUserLoction('jack' , 20 , 'ny');
console.log(user3)
user3.hi();

class AddUser extends User {
    constructor(name,age,location){
        super(name,age);  
        this.location = location ;
    }
    hi(){
        super.hi() ;
        console.log(`안녕하세요 현재 유저의 위치는 ${this.location}`)
    }
    
}

const user4 = new AddUser('merry',25,'LA') ;
console.log(user4)
user4.hi()

// Dog 클래스 color weight gender  
// Dog 확장 시켜서 Cat   color weight gender   +  name  


class Dog {
    constructor (color,weight,gender){
        this.color=color;
        this.weight=weight;
        this.gender=gender;
    }
}

const dog1 = new Dog('black',3.5,'male');
console.log(dog1)

class Cat extends Dog {
    constructor(color,weight,gender,name)  {
        super(color,weight,gender);
        this.name=name;
    }
}

const cat1 = new Cat('black',4.5,'female','순둥이');
console.log(cat1)

/* 
class App extends Component {
  render() {
    const name = '리액트';
    return <div>{name}</div>;
  }
}
*/


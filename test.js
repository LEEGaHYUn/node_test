// var i = 1;

// while (i < 10) {
//     console.log("3 * "+i+" = " + 3*i);
//     i = i + 1;
// }

// function Clazz(msg) {
//     // 변수를 객체의 멤버로 사용하기 위해 this 예약어를 사용해서 정의한다.
//     this.name = 'I am Class';
//     this.message = msg;
//     // this를 사용하지 않은 변수
//     message2 = "find me!";
//     // 멤버함수 선언
//     this.print = function () {
//         console.log(message2);
//     };
// }
// // 객체를 생성
// var myClazz = new Clazz('good to see u!');
// console.log(myClazz.message);
// // this를 사용하지 않은 message2 변수는 외부에서 참조할 수 없다.
// console.log(myClazz.message2);
// // this로 선언된 함수를 통해 사용할 수 있다.
// myClazz.print();

// function Clazz(msg) {
//     this.name = 'I am Class';
//     this.message = msg;
//     message2 = "find me!";
// }
// //Clazz 객체의 prototype 을 가져와서 message값을 리턴하는 함수를 하나 추가한다.
// Clazz.prototype.getMessage = function () {
//     return this.message;
// }
// Clazz.prototype.getMessage2 = function () {
//     return this.message2;
// }
// // 객체를 생성
// var myClazz = new Clazz('good to see u!');
// console.log(myClazz.getMessage());
// // 내부에 선언된 함수와는 다르게 prototype으로 선언한 함수는 값을 사용할 수없다.
// console.log(myClazz.getMessage2());

function Clazz(){
    this.name = 'Hello there!';
    this.message;
    }
    // message 변수에 값을 입력하는 함수
    Clazz.prototype.setMessage = function(msg){
    this.message = msg;
    }
    // message 변수의 값을 가져오는 함수
    Clazz.prototype.getMessage = function(){
    return this.message;
    }
    // exports 명령어를 사용함으로써 다른파일에서 require 예약어를 이용해 Clazz 객체를 사용할 수 있게된다.
    // exports 명령어의 위치는 파일의 어떤곳에 위치해도 동일하게 동작한다.
    module.exports = Clazz;
    
    

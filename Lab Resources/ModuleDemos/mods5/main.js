import Student, {sayHi, sayBye } from "./student.js";
window.sayHello = sayHi;

sayHi('Mike');
sayBye('Mike');

var stu = new Student('Bob', 21);
alert(stu.getDetails());

export function doSomething(){
    console.log("doSomething is called!")
}

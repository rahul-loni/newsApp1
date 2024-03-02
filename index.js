// Array in Js 
// let cricketer=["Sandeep","Rohit ","virat","jhon","Himanshu"]
// console.log(cricketer)
// let Number=[2,3,4,5,6,7]
// console.log(Number.length)


// let cricketer_name=['Rohit','Rahul','Dhoni','sandeep']
// for(let index=0; index<cricketer.length; index++){
//     console.log(cricketer[index]);
// }

//function 
// function myName(){
//     console.log("Welcome to Boston college ");
//     console.log("Welcome to Boston college1 ");
//     console.log("Welcome to Boston college2 ");
    
// }
// myName();

// function message(msg,n){
//     console.log(msg,n)
// }
// message("i love Boston college",100 ) 


// //add two numbers

// function addNumber(x,y){
//     console.log(x+y)
// }
// addNumber(2,3);

// function my_Function(){
//   console.log("Hello Boston college")
// }
// my_Function()

// //Return dunction 

// function calcArea(width,height){
// // let area=width*height;
// return width*height
// }
// let result=calcArea(20,30)
// console.log(result)

// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }
  
//   const mycar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
//   console.log(mycar.make); // "Honda"
//   myFunc(mycar);
//   console.log(mycar.make);


//   function loginMessage(username){
//     return `${username} Login comp`
// }
// console.log(loginMessage("Hello Rahul Kumar"));

let x=24;

const  my_function=(str)=>{
 let count=0;
 for(const char of str){
  if(char ==="b" || 
  char ==="e" || 
  char ==="i" || 
  char ==="o" ||
  char==="u"){
    count++;
  }
 }
 return count;
}








// object
let myinfo={
name:"rahul",
age:20,
marks:90,
location:"bharatpur",
gender:'male',
phone:980776543,
isLogin:true,
email:"rahul@chatgpt.com",
nots: {
  my:"welcome to My Code "

},
subject:["IT","Math"]
}
console.log(myinfo);
console.log(myinfo.age);
console.log(myinfo.email)
console.log(myinfo["email"])
console.log(myinfo.nots["my "])


function createCourse(){
  return {
    course_no:6,
    lecture:45,
    section: 3,
    email(){
      console.log("rahul@gmail.com")
    }
  }
}
const course=createCourse();
course.email()


function Rahul(){
  this.firstname=name;
}


//Event in js






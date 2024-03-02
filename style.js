// function myFunction(){
// console.log("Hello Boston ");
// console.log("Hello Boston College")
// }
// myFunction();
// myFunction();
// myFunction();

// function message(msg,n){
//     console.log(msg,n)
// }
// message("Boston College",100);//argument

// function sum(a,b){
//     console.log(a+b,a*b);
// }
// sum(2,3);

//Return function 

// function sum(x,y){
//   s=x+y;
//   console.log("before return");
//   return s;
//   console.log("after return");
// }
// let val=sum(3,5);
// console.log(val);


// function loginMessage(username){
//     return `${username} Login comp`
// }
// console.log(loginMessage("Hello Rahul Kumar"));


function loginMessage(username){
    if(username===undefined){
        console.log("please Enter user name");
        return
    }
    return `${username} just login comp.` 
}
console.log(loginMessage());



//Array in Js:-Collection of Items 
let A=[2,3,4,5,6,7,8]
console.log(A)

let Name=['rahul','Kumar','Rohan','Singh']
console.log(Name.length);


//Looping in array 
let cricketer_name=['Rohit','Rahul','Dhoni','sandeep']
for(let index=0; index<cricketer.length; index++){
    console.log(cricketer[index]);
}






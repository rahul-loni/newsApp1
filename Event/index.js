// let btn1=document.querySelector('#btn1');
// btn1.onclick=()=>{
//     console.log("click button 1");
//     let a=25;
//     a++;
//     console.log(a);
// }
// let div=document.querySelector("#div");
// div.onmouseover=()=>{
//     console.log("mouseover")

// }
// let div=document.querySelector("#div");
// div.onmouseover=()=>{
//     console.log("mouseover")
    
// }



// document.getElementById('img1').onclick=function(){
//     alert("hello Rahul kumar")
//     prompt("hello ")
//     console.log("Hello Image 1")
// }

// document.getElementById('img1').addEventListener('click',function(){
//     alert("hello Rahul kumar")
//     prompt("hello ")
//     console.log("Hello Image 1")
// })

// let btn2=document.querySelector("#btn2")
// btn2.addEventListener('click',()=>{
//     console.log("Hello1");
// });
// btn2.addEventListener('click',()=>{
//     console.log("Hello2");
// });
// btn2.addEventListener('click',()=>{
//     console.log("Hello3");
// });
// btn2.addEventListener('click',()=>{
//     console.log("Hello4");
// });
// btn2.addEventListener('click',()=>{
//     console.log("Hello5");
// });
// btn2.removeEventListener('click',()=>{
//     console.log("Hello3");
// });

let modebtn=document.querySelector("#mode");
let txt=document.querySelector("#txt");
let currentMode="light"
modebtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        txt.style.color="white";  
    }else{
        currentMode="light";
        document.querySelector("body").style.backgroundColor="white";
        txt.style.color="black"
    }
    console.log(currentMode)
});
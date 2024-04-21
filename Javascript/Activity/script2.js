// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function (){
//         console.log("Stop! Daddy..")
//     })
//     // btn.onmouseenter  = function () {
// // } 
// }


// function  sayHello() {
//     alert("Heyyy Punit");
// }
// function sayName() {
//     alert ("Punit Prajapati");
// }


let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor(); 
    h3.innerHTML = randomColor;

    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color updated!")
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `RGB(${red} , ${green}, ${blue})`;
    return color;

}
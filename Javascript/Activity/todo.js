// let todo = [];

// let wish = prompt("Enter Your request");

// while(true){

//     if(wish == "quit") {
//         console.log("Exiting the App");
//         break;
//     }

//     if(wish == "list") {
//         console.log("---------------------");
//         for( let i = 0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("---------------------");
//     }else if(wish == "add"){
    
//         let task = prompt("Enter your tasks you want to add");
//         todo.push(task);
//         console.log("task Added");
//     }else if(wish == "delete"){
//         console.log("---------------------");
//         let idx = prompt("Enter your task index you want to remove.");
//         todo.splice(idx,1);
//         console.log("Task Deleted")
//         console.log("---------------------");
//     }else{
//         console.log("Wrong Request Entered!!")
//     }
//     wish = prompt("Enter Your request");
    

// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
let item = document.createElement("li");
  item.innerText = inp.value;

let delBtn = document.createElement("button");
delBtn.innerText  = "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);
inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//        let par = this.parentElement;
//        par.remove();
//     })
// }
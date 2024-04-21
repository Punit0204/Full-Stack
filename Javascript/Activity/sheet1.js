// console.error("Worng passward entered..");
// console.warn("make Passward More strong..");
// alert("Re-Entered The Passward");
// let name = prompt("Enter Your Name");
// console.log(name);

// let str = "Welcome";
// console.log(str.slice(3));

// let nm = "chipi-chipi";
// console.log(nm.repeat(2));

// let msg = "help!";
// console.log(msg.trim().toUpperCase());
// let na = ["Banana","Apple","Mango"];
// console.log(na);

// na = ["Apple","Orange"];
// console.log(na);

// for(let i=1; i<=20; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// let n = prompt("Enter Your Number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// const favMovie = "iron man";

// let movie = prompt("Guess The Marvel Movie Name");

// while( (movie !== favMovie) && (movie != "quit")){
//     movie = prompt("Wrong Answer, try again!!");
// }

// if(movie == favMovie){
//     console.log("Congrats!!");
// }else{
//     console.log("You quit");
// }

// const post = {
//     username : "@Punit Prajapati",
//     content: "Hey! Everyone, this is my #firstpost on the platform.",
//     likes: 1000,
//     repost: 30,
//     tag: ["@javascript","backend dev"],
//     city : "Ahemdabad"
// };

// const obj = {
  
//     1 : "first",
//     2 : 23,
//     null : "unknown",
//     undefined : 101
// };

// function welcome() {
//     console.log("This is my First Function Call");
// }

// function doTask(func, count){
//     for(let i = 1; i<=count; i++){
//         func();
//     }
// }

// let task = function() {
//     console.log("DO CODING");
// }

// doTask(task, 5);

// console.log("heyy");
// console.log("Welcome!");
// let n = "Punit";
// try{
//     console.log(n);
// } catch {
//     console.log("caught an error on this line");

// }

// console.log("Have a nice day...");

// const add = (a,b) => {
//     console.log(a+b);
// }
// const cube = (n) => {
//     console.log(n*n*n);
// }

// console.log("Hello Everyone");
// console.log("Welcome To coding club");

// setTimeout( () =>{
//    console.log("Punit invites you to the club.");
// }, 5000);

// console.log("Thanks For Watching");


// let id = setTimeout( () =>{
//     console.log("Punit invites you to the club.");
//  }, 3000);
//  clearInterval(id);

// const data = {
//     name: "harsh",
//     age: 21,
//     job: "Developer",
//     salary: 100000,
//     prop: this,
//     getAge: function(){
//         console.log(this);
//         return (this.age);
//     },
//     getName: () => {
//       console.log(this);
//       return (this.name);
//     }

// }

// let arr = ["punit","harsh","vanshil","Toshi"];

// let show = (el) => {
//   console.log(el);
// }
// arr.forEach(show);

// let obj = [
//   {
//     name: "Bob",
//     job: "teacher",
//     salary: "1000$/month",
//   },
//   {
//     name: "Jack",
//     job: "Lawyer",
//     salary: "1500$/month",
//   },{
//     name: "john",
//     job: "Dalal",
//     salary: "=2000$/month",
//   }];

// obj.forEach((detail) => {
//   console.log(detail.job);
// })

// let arr = [2,4,6,8];
// let sqaure = arr.map((el) => {
//   return el*el;
// });

// sqaure.forEach((num)=> {
//    console.log(num);
// });

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let ans = array.filter((num) => {
//   return num%2 == 0;
// });

// let n1 = [1,2,3,4,5];

// let n2 = n1.reduce((ac,re) => {
//   return (ac * re);
// })

// function sum(a,b=10) {
//   return a + b;
// }
// console.log(sum(4));

// let a2 = [12,45,34,1,23,34,65,76,89];

// let newA2 = [...a2]; // ... -> Spread: which store each value of obj as Individual;
// console.log(newA2);

// let arr = [12,45,34,1,23,34,65,76,89];
// console.log(...arr);

// console.log(..."Punit Prajapati");

// function days(...day){
  
//     for (let i=0; i< day.length; i++){
//         console.log("Today is :", day[i]);
//     }
// }

// let names = ["Laata","kunal","neel","mukesh"];
// let [winner,runnerUp] = names;
// console.log(winner, runnerUp);


import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getRandom(anyArray) {
    let max = anyArray.length - 1;
    let min = 0;
    let random = getRandomNumber(min, max);
    return anyArray[random];
}

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  // write your code here
  let excuse =    
    getRandom(who) + " " +
    getRandom(action) + " " +
    getRandom(what) + " " +
    getRandom(when) + ".";
  document.querySelector("#excuse").innerHTML = excuse;
  document.querySelector('#generate-btn').addEventListener('click', function() {
    let newExcuse =    
      getRandom(who) + " " +
      getRandom(action) + " " +
      getRandom(what) + " " +
      getRandom(when) + ".";
    document.querySelector("#excuse").innerHTML = newExcuse; 
  }); 
};
var flashCardQA = [
  {
    question1: "What is JavaScript?",
    answer1:
      "JavaScript (JS) is a programming language mostly used client-side to dynamically script webpages, but often also server -side, using packages such as Node.js."
  },
  {
    question2: "What is a Node?",
    answer2:
      "Node is an interface from which a number of DOM API object types inherit; it allows these various types to be treated similarly, for example inheriting the same set of methods, or being tested in the same way."
  },
  {
    question3:
      "What is a function declaration compared to a function expression?",
    answer3:
      '"declaration: function myFunc(){ ... } expression: var myFunc = function() { ...}"'
  }
];

var frontCard = document.getElementsByClassName("frontCard")[0];
var backCard = document.getElementsByClassName("backCard")[0]
 
// Reference: https://stackoverflow.com/questions/19197140/javascript-append-text-into-div

frontCard.innerHTML = flashCardQA[0].question1;

frontCard.innerHTML += flashCardQA[1].question2;

frontCard.innerHTML += flashCardQA[2].question3;

backCard.innerHTML += flashCardQA[0].answer1;

let randomIndex = Math.floor(Math.random()*flashCardQA.length)
    //Invokes random question generator

document.addEventListener('keydown', function(ev) { 
    if (ev.key === 'ArrowUp') {
        console.log(ev);
        //if add another action =, add if statement
    }
    //Invoke EventListener for keyUP
        //Create a function for the flipCard motion
    
})

document.addEventListener('keydown', function(ev) { 
    if (ev.key === 'ArrowDown'){
        console.log(ev);
        //if add another action =, add if statement
    }})
    //Invoke EventListener for keyDown
        //Create a function for the flipCard motion
        

var flashCardQA = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript (JS) is a programming language mostly used client-side to dynamically script webpages, but often also server -side, using packages such as Node.js."
  },
  {
    question: "What is a Node?",
    answer:
      "Node is an interface from which a number of DOM API object types inherit; it allows these various types to be treated similarly, for example inheriting the same set of methods, or being tested in the same way."
  },
  {
    question:
      "What is a function declaration compared to a function expression?",
    answer:
      '"declaration: function myFunc(){ ... } expression: var myFunc = function() { ...}"'
  }
];

var frontCard = document.getElementsByClassName("frontCard")[0];
var backCard = document.getElementsByClassName("backCard")[0]
 
// Reference: https://stackoverflow.com/questions/19197140/javascript-append-text-into-div

frontCard.innerHTML = flashCardQA[0].question;

// frontCard.innerHTML += flashCardQA[1].question2;

// frontCard.innerHTML += flashCardQA[2].question3;

// backCard.innerHTML += flashCardQA[0].answer1;

let randomIndex = Math.floor(Math.random()*flashCardQA.length)
    //Invokes random question generator

let index = 0

document.addEventListener('keydown', function(ev) { 
    if (ev.key === 'ArrowUp') {
        console.log(ev);
        frontCard.setAttribute('hidden', true);
        backCard.removeAttribute("hidden");
        index++
        frontCard.innerHTML = flashCardQA[index].question;
        //if add another action =, add if statement
    }
    if (ev.key === 'ArrowDown'){
        console.log(ev);
        backCard.setAttribute("hidden", true);
        frontCard.removeAttribute("hidden");
        //if add another action =, add if statement
    }
    //Invoke EventListener for keyUP
        //Create a function for the flipCard motion
    
})

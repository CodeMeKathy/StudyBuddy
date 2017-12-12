var flashCardQA = [
  {
    question: "JavaScript Fundamentals",
    answer:
      ""
  },
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
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback function is any function to be called at a later time, whether by the browser in the event-handling phase or by other code"
  },
  {
    question: "What is a closure?",
    answer:
      "A closure is a function that closes over its environment. It has access to the state of the environment, but the variables inside the closure are private.\n Example: (function (){var scopeVar = 'Hello';\n (function closure(){ var closureVar = ' World'; console.log(scopeVar + closureVar);\n })();\n})();\n scope Var is accessible inside the outer and the inner function, but closureVar is only accessible inside the inner function."
  }
];

var frontCard = document.getElementsByClassName("frontCard")[0];
var backCard = document.getElementsByClassName("backCard")[0]
 
// Reference: https://stackoverflow.com/questions/19197140/javascript-append-text-into-div

frontCard.innerHTML = flashCardQA[0].question;

// frontCard.innerHTML += flashCardQA[1].question2;

// frontCard.innerHTML += flashCardQA[2].question3;

// backCard.innerHTML += flashCardQA[0].answer1;


// for (var i = 0; i < flashCardQA.length; i++) { 
//     console.log(flashCardQA[i])
//     frontCard.innerHTML = flashCardQA[i].question
//     backCard.innerHTML = flashCardQA[i].answer

// }
// // Create an index to pass through the questions in order 

let index = 0
// let randomIndex = Math.floor(Math.random()*flashCardQA.length)
//     //Invokes random question generator

document.addEventListener('keydown', function(ev) { 
    if (ev.key === 'ArrowUp') {
        // next question
        console.log(ev);
        backCard.setAttribute('hidden', true);
        frontCard.removeAttribute("hidden");
        index++
        // function showFront() {
        //     show the front of the card
        //     call showBack
        // }
        // function showBack() {
        //     on 2nd arrowup 
        //     show the back of the card
        //     index++
        // }
        frontCard.innerHTML = flashCardQA[index].question;
        // Add another action === add if statement
    }
    if (ev.key === 'ArrowDown'){
        // previous question
        console.log(ev);
        index--
        // function showFront() {
        //     show the front of the card
        //     call showBack
        // }
        // function showBack() {
        //     on 2nd arrowup 
        //     show the back of the card
        //     index++
        // }
        frontCard.setAttribute("hidden", true);
        backCard.removeAttribute("hidden");
       
    }
    
})

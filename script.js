var flashCardQA = [
  {
    question: "JavaScript Fundamentals",
    answer: ""
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
var backCard = document.getElementsByClassName("backCard")[0];

// Reference: https://stackoverflow.com/questions/19197140/javascript-append-text-into-div

frontCard.innerHTML = flashCardQA[0].question;

// // Create an index to pass through the questions in order

let index = 0;
// let randomIndex = Math.floor(Math.random()*flashCardQA.length)
//     // === Invokes random question generator

document.addEventListener("keydown", function(ev) {

  if (ev.key === "ArrowUp") {
    // Kevon assisted with index + 1 index
    if (index + 1 >= flashCardQA.length) {
    //   console.log("index is " + index);
    //   console.log("flashCardQA.length is " + flashCardQA.length);
      //   frontCard.innerHTML = newCardDeck[index2].question;
      //   index2++;
      frontCard.removeAttribute("hidden");
      frontCard.style.background = "green";
      frontCard.innerHTML = "ya done";
    //   console.log("arrow up Finished at " + index);
    } else {
      // next question
      console.log(ev);
      backCard.setAttribute("hidden", true);
      frontCard.removeAttribute("hidden");

      index++;

      frontCard.innerHTML = flashCardQA[index].question;
    } // end of else
  }
  // // else {
  // Add another action === add if statement

  if (ev.key === 'ArrowDown') {
    // Kevon assisted with index + 1 index
    if (index + 1 >= flashCardQA.length) {
      
      frontCard.removeAttribute('hidden');
      frontCard.style.background = 'pink';
      frontCard.innerHTML = 'ya done';
      console.log("arrow down Finished at " + index);
    } else {
      // previous question
      console.log(ev);
      index--;
      backCard.setAttribute('hidden', true);
      frontCard.removeAttribute("hidden");
      frontCard.innerHTML = flashCardQA[index].question;
    } // end of else
  }

  if (ev.key === 'Enter') {
    frontCard.setAttribute('hidden', true);
    backCard.removeAttribute('hidden');
    backCard.innerHTML = flashCardQA[index].answer;
  }
}); // end of combined keydown event listener for arrow up/down

// Event that triggers the population of newCardDeck
// Create an empty deck
var guessedCorrectly = [];
var guessedIncorrectly = [];
let index2 = 0;

function wrongPile() {
  console.log(tryAgain);
  console.log("Sorry, that is not the correct answer.");
  // guessedIncorrectly.push(flashCardQA[index]);
  flashCardQA.push(flashCardQA[index]);

  // guessedIncorrectly.push(flashCardQA)
  //
  // })
  // console.log(this);
}

var tryAgain = document.getElementsByClassName("guessedWrong")[0];
tryAgain.addEventListener("click", wrongPile);
// if (flashCardQA.question[] !== flashCardQA.answer[]) {
//     console.log('Sorry, that is not the correct answer.')
//     newCardDeck.push(flashCardQA)
//     console.log(newCardDeck)
// }

// Is a user response or key entry to indicate incorrect response?
if (flashCardQA === flashCardQA.length) {
  frontCard.innerHTML = newCardDeck[index2].question;
  index2++;
}
//else frontCard.innerHTML = flashCardQA[index].question;

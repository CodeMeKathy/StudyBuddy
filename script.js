var flashCard = [
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

var frontCard = document.getElementsByClassName("frontCard")[0]
var backCard = document.getElementsByClassName("backCard")[0]
 
// Reference: https://stackoverflow.com/questions/19197140/javascript-append-text-into-div

frontCard.innerHTML = flashCard[0].question1;

frontCard.innerHTML += flashCard[1].question2;

frontCard.innerHTML += flashCard[2].question3;

backCard.innerHTML += flashCard[0].answer1;

// let randomIndex = Math.floor(Math.random()*flashCard.length)
    //Invokes random question generator

document.addEventListener('keydown', function nextCard() { const keyUp = nextCard.38;
    //Invoke EventListener for keyUP
    
})

document.addEventListener('keydown', function nextCard() { const keyUp = nextCard.38;
    //Invoke EventListener for keyDown
    
})

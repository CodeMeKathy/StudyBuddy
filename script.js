var questions = {
question1: 'What is JavaScript',
question2: 'What is Node'
}

var answers = {
answers1: 'answers1',
answers2: 'answers2'
}

var frontCard = document.getElementsByClassName("frontCard")[0]

 
// Reference: https://stackoverflow.com/questions/19197140/javascript-append-text-into-div

frontCard.innerHTML = questions.question1;

frontCard.innerHTML += questions.question2;


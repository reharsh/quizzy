const questions=[
    {
        question:"What is a data structure?",
        answers:[
            {text:'A programming language',correct:false},
            {text:'A collection of algorithms',correct:false},
            {text:'A way to store and organize data',correct:true},
            {text:'A type of computer hardware',correct:false},
        ]
    },
    {
        question:" Which data structure is used for implementing recursion?",
        answers:[
            {text:'queue',correct:false},
            {text:'stack',correct:true},
            {text:'vector',correct:false},
            {text:'array',correct:false},
        ]
    },
    {
        question:"The data structure required to check whether an expression contains a balanced parenthesis is?",
        answers:[
            {text:'stack',correct:true},
            {text:'queue',correct:false},
            {text:'tree',correct:false},
            {text:'array',correct:false},
        ]
    },
    {
        question:"What is the value of the postfix expression 6 3 2 4 + – *?",
        answers:[
            {text:'74',correct:false},
            {text:'-18',correct:true},
            {text:'-22',correct:false},
            {text:'40',correct:false},
        ]
    },
    {
        question:"The data structure required for Breadth First Traversal on a graph is?",
        answers:[
            {text:'Tree',correct:false},
            {text:'Stack',correct:false},
            {text:'Queue',correct:true},
            {text:'Array',correct:false},
        ]
    },
    {
        question:"Which of the following is not the type of queue?",
        answers:[
            {text:'priority queue',correct:false},
            {text:'circular queue',correct:false},
            {text:'single ended queue',correct:true},
            {text:'ordinary queue',correct:false},
        ]
    },
];


const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let curruentQuestionIndex=0;
let score=0;
function Gotohome(){
    window.location="index.html";
}
function  startQuiz(){
    curruentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentques=questions[curruentQuestionIndex];
    let questionno=curruentQuestionIndex+1;
    questionElement.innerHTML=questionno +'.'+currentques.question;
    currentques.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="inline";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="inline";
}
function handleNextButton(){
    curruentQuestionIndex++;
    if(curruentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(curruentQuestionIndex<questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});
startQuiz();

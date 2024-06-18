const questions=[
    {
        question:" Which type of Programming does Python support?",
        answers:[
            {text:'object-oriented programming',correct:false},
            {text:'structured programming',correct:false},
            {text:'functional programming',correct:false},
            {text:'All of the above',correct:true},
        ]
    },
    {
        question:"Is Python case sensitive when dealing with identifiers?",
        answers:[
            {text:'No',correct:false},
            {text:'Yes',correct:true},
            {text:'Machine Dependent',correct:false},
            {text:'None',correct:false},
        ]
    },
    {
        question:"Is Python code compiled or interpreted?",
        answers:[
            {text:'Python code is both compiled and interpreted',correct:true},
            {text:'Python code is neither compiled nor interpreted',correct:false},
            {text:'Python code is only compiled',correct:false},
            {text:'Python code is only interpreted',correct:false},
        ]
    },
    {
        question:"All keywords in Python are?",
        answers:[
            {text:'Capitalized',correct:false},
            {text:'lower case',correct:false},
            {text:'UPPER case',correct:false},
            {text:'None',correct:true},
        ]
    },
    {
        question:"What does pip stand for python?",
        answers:[
            {text:'Pip Installs Python',correct:false},
            {text:'Pip Installs Packages',correct:false},
            {text:'Preferred Installer Program',correct:true},
            {text:'All',correct:false},
        ]
    },
    {
        question:" Which of the following is the truncation division operator in Python?",
        answers:[
            {text:'|',correct:false},
            {text:'*',correct:false},
            {text:'\\\\',correct:true},
            {text:'%',correct:false},
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

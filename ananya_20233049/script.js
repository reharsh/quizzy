const questions=[
    {
        question:"What is the size of ‘int’?",
        answers:[
            {text:'2',correct:false},
            {text:'4',correct:false},
            {text:'8',correct:true},
            {text:'None',correct:false},
        ]
    },
    {
        question:"What is the built in library function to compare two strings?",
        answers:[
            {text:'string_cmp',correct:false},
            {text:'strcmp',correct:true},
            {text:'equals',correct:false},
            {text:'compare',correct:false},
        ]
    },
    {
        question:" Choose the function that is most appropriate for reading in a multi-word string?",
        answers:[
            {text:'gets',correct:true},
            {text:'scanf',correct:false},
            {text:'strchr',correct:false},
            {text:'getchar',correct:false},
        ]
    },
    {
        question:"In which year was C language developed?",
        answers:[
            {text:'1962',correct:false},
            {text:'1978',correct:false},
            {text:'1979',correct:false},
            {text:'1972',correct:true},
        ]
    },
    {
        question:" C language is a successor to which language?",
        answers:[
            {text:'basic',correct:false},
            {text:'cobol',correct:false},
            {text:'B',correct:true},
            {text:'C++',correct:false},
        ]
    },
    {
        question:"Which is not a valid keyword in C language?",
        answers:[
            {text:'for',correct:false},
            {text:'while',correct:false},
            {text:'do-while',correct:true},
            {text:'switch',correct:false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const backButton=document.getElementById("back");
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

const quizData=[
    {
     question:"Which language runs on browser?",
     a: "Java",
     b:"C",
     c:"Javascript",
     d:"Pyhton",
     correct:"c"
    },
    {
    question:"full form of HTML?",
           a:"hyper link markup language",
           b:"Hyper text markup language",
           c:"Hyper tele mark language",
           d:"hyper text marking Language",
           correct:"b"
    },
    {
        question:"Javascript is launched in a year",
        a:"1999",
        b:"1997",
        c:"1995",
        d:"1994",
        correct:"c"
    },
    {
        question:"css stands for",
        a:"cascading style sheet",
        b:"Central style sheet",
        c:"cascading simple sheet",
        d:"control support system",
        correct:"a"
    }
];
//
const quiz=document.getElementById("quiz")
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");

const aText = document.getElementById("a-text");
const bText= document.getElementById("b-text");
const cText=document.getElementById("c-text");
const dText=document.getElementById("d-text");

const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;


loadQuiz()

function loadQuiz(){
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    aText .innerText=currentQuizData.a
    bText.innerText=currentQuizData.b
    cText.innerText=currentQuizData.c
    dText.innerText=currentQuizData.d

}
 
function deselectAnswer(){
    answerEls.forEach(answerEls=>answerEls.checked= 
    false)
}

function getSelected(){

    let answer

    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected()

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++//fetcing next question

        if(currentQuiz<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>You Answered ${score}/${quizData.length}
            questions correctly.
            <button onClick="location.reload()">Reload</button>
            `
        }
    }
})
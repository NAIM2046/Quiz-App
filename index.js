const startButton = document.querySelector(".Mybtn") ;
const RuleBox = document.querySelector(".Rulesbox") ; 
const FirstPage = document.querySelector(".MyQuizApp") ;
const ExitButton = document.querySelector(".ExitButton") ;
const continueButton = document.querySelector(".ContinueButton") ;
const Questions = document.querySelector(".questions") ;
const nextButton = document.querySelector(".nextbtn") ;
const totalQuestions = document.querySelector(".total_que") ;
const optionsList = document.querySelector(".Myoptions") ;
const timeCount = document.querySelector(".TimeCount .Seconds") ;
const timeOff = document.querySelector(".TimeCount .Timeleft") ;
const timeLine = document.querySelector(".questionHeader .time_lines") ;

 const ResultBox = document.querySelector(".result_box") ;
 const ReplayButton = document.querySelector(".restart") ;
 const QuitButton = document.querySelector(".quit") ;
 const scoresText = document.querySelector(".scores_text") ;

startButton.onclick = ()=>{
    FirstPage.classList.add("hidden") ;
    RuleBox.classList.remove("hidden") ;


}
ReplayButton.onclick= ()=>{
    questionCnt = 0
    score = 0
    ResultBox.classList.add("hidden")  ;
    Questions.classList.remove("hidden") ;
    showQuestion(0) ;
   
 } 
 QuitButton.onclick =() =>{
    ResultBox.classList.add("hidden")  ;
 }
ExitButton.onclick = () =>{
    //console.log("Exit") ;
    RuleBox.classList.add("hidden") ;
    FirstPage.classList.remove("hidden") ;
}
continueButton.onclick = ()=>{
    RuleBox.classList.add("hidden") ;
    Questions.classList.remove("hidden") ;
    showQuestion(0) ;
    startTimer(15) ;
   


}
 
let questionCnt = 0 ;
let counter  ;
let counterLine = 0; 
let widthValue = 0 ;
let score = 0 ;
nextButton.onclick= ()=>{
     if(questionCnt < Question.length -1){
        questionCnt++;
        showQuestion(questionCnt) ;
        clearInterval(counter) ;
        startTimer(15) ;
        timeOff.textContent = "Time left" ;
     }
     else{
        console.log("compliete your teack ") ;
        resultShow() ;
        Questions.classList.add("hidden") ; 
        ResultBox.classList.remove("hidden") ;


     }
     nextButton.classList.add("hidden") ;
}

 const showQuestion = (index) =>{
    const Questionarea = document.querySelector(".text") ;
    
    startTimeLine(0) ;

    let questiontag = "<span>" + Question[index].number+ "." +Question[index].question + "</span>" ;
    Questionarea.innerHTML = questiontag ;
    let optionTage =  `<div class="options"><span>${Question[index].options[0]}</span></div><div class="options"><span>${Question[index].options[1]}</span></div><div class="options"><span>${Question[index].options[2]}</span></div><div class="options"><span>${Question[index].options[3]}</span></div>`
  optionsList.innerHTML = optionTage  ;
   totalQuestions.innerHTML = index+1 + " of 5 question"  ;
const options = optionsList.querySelectorAll(".options") ;
   for(let i = 0 ; i<options.length ; i++){
    options[i].setAttribute("onclick" ,"optionSeleted(this)" ) ;
   }

}

let tickIcon ='<div class="tick icon"><i class="fas fa-check"></i></div>'; 
let crossIcon = '<div class="cross icon"><i class="fas fa-times"></i></div>'; 


const optionSeleted =(answer)=>{
    //    console.log(answer.textContent) ;
    let userAns = answer.textContent ;
    let corrcetAns = Question[questionCnt].answer ;
    let alloptions = optionsList.children.length ;
    nextButton.classList.remove("hidden") ;
    clearInterval(counter) ;
    clearInterval(counterLine) ;

    if(userAns == corrcetAns){
        answer.classList.add("correct") ;
        answer.insertAdjacentHTML("beforeend" ,tickIcon) ;
        score++ ;
    }
    else{
        answer.classList.add("incorrect") ;
        answer.insertAdjacentHTML("beforeend" , crossIcon) ;
        for(let i = 0 ; i< alloptions ; i++){
            if(optionsList.children[i].textContent == corrcetAns){
                optionsList.children[i].setAttribute("class" , "options correct") ;
                optionsList.children[i].insertAdjacentHTML("beforeend" ,tickIcon) ;
            }
        }

    }
    for(let i = 0 ; i< alloptions ; i++){
        optionsList.children[i].classList.add("disabled") ;
    }

}


const resultShow = () =>{
    Questions.classList.add("hidden") ; 
    ResultBox.classList.remove("hidden") ;
   let scoreTag = '<span>Congratulations You Got <b>'+ score +'</b> Out Of <b>'+Question.length +'</b></span>';
   scoresText.innerHTML = scoreTag ;

}

const startTimer = (time) =>{
    counter = setInterval(()=>{
        timeCount.textContent = time ;
        time-- ;
        if(time<0){
            nextButton.classList.remove("hidden") ;
            clearInterval(counter) ;
            clearInterval(counterLine);
            timeCount.textContent = "00" ;
            timeOff.textContent = "Time off" ;
            let corrcetAns = Question[questionCnt].answer ;
            let alloptions = optionsList.children.length ;
            for(let i = 0 ; i< alloptions ; i++){
                if(optionsList.children[i].textContent == corrcetAns){
                    optionsList.children[i].setAttribute("class" , "options correct") ;
                    optionsList.children[i].insertAdjacentHTML("beforeend" , tickIcon) ;


                }
            }  
            for(let i=0; i<alloptions; i++){
                optionsList.children[i].classList.add("disabled"); 
                }      
        }
    },1000) ;
}

console.log(counterLine) ;
function startTimeLine (time){
    counterLine = setInterval( timer,50) ;
   
        function timer(){
            time+=1 ;
            timeLine.style.width = time + "px" ;
            if(time>319){
                clearInterval(counterLine) ;
            }
                
            
        }
}






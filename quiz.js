
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const choices = document.getElementById("choices");
const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions=[
    {
    question:"Which of these is a man-made non living thing",
    choiceA:"Mountain",
    choiceB:"Rock",
    choiceC:"River",
    choiceD:"Bridge",
    correct:"D"
    },

     {
    question:"2)What is the relationship between gauri and lord ganesha?",
    choiceA:"Mother-Son",
    choiceB:"Wife-Husband",
    choiceC:"Sister-Brother",
    choiceD:"Sister in law-Brother in law",
    correct:"A"
    },
   
     {
    question:"How many days are there in a leap year?",
    choiceA:"375",
    choiceB:"366",
    choiceC:"365",
    choiceD:"363",
    correct:"B"
    },
   
     {
    question:"Which of the following country share it’s border with India?",
    choiceA:"Bangladesh",
    choiceB:"Japan",
    choiceC:"America",
    choiceD:"Sri lanka",
    correct:"A"
    },
   
     {
    question:"How  many bones does a shark have?",
    choiceA:"59",
    choiceB:"0",
    choiceC:"450",
    choiceD:"360",
    correct:"B"
    },
   
     {
    question:"In which year did India and Pakistan gain their independence?",
    choiceA:"1947",
    choiceB:"1997",
    choiceC:"1952",
    choiceD:"1938",
    correct:"A"
    },
   
     {
    question:"In which year did a new century start?",
    choiceA:"2000",
    choiceB:"1901",
    choiceC:"2010",
    choiceD:"1999",
    correct:"A"
    },
   
     {
    question:"What is the name of Facebook’s  founder?",
    choiceA:"Mark Zuckerberg",
    choiceB:"Phillip Rich",
    choiceC:"Barack Obama",
    choiceD:"Bill Gates",
    correct:"A"
    },
   
     {
    question:"What is the longest river in the world called?",
    choiceA:"The Vloga",
    choiceB:"The Amazon",
    choiceC:"The Nile",
    choiceD:"The Mississippi",
    correct:"C"
    },

    {
    question:"Which is the worls's largest flower?",
    choiceA:"Rafflesia arnoldii",
    choiceB:"Talipot palm.",
    choiceC:"corpse flower",
    choiceD:"Wolffia flower",
    correct:"A"
    },
      {
    question:"Who was the first man to walk on the moon?",
    choiceA:"John Glenn",
    choiceB:"Alan Shepard",
    choiceC:"Neil Armstrong",
    choiceD:"Buzz Aldrin",
    correct:"C"
    },
      {
    question:"Which continent is know as ‘Dark Continent’?",
    choiceA:"Africa",
    choiceB:"Asia",
    choiceC:"North America",
    choiceD:"Australia",
    correct:"A"
    },
      {
    question:"Which is the largest ocean in the world?",
    choiceA:"Bay Of Bengal",
    choiceB:"Pacific Ocean",
    choiceC:"Indain Ocean",
    choiceD:"Arabian Ocean",
    correct:"B"
    },
      {
    question:"What is the average body temperature of humans?",
    choiceA:"27°",
    choiceB:"37°",
    choiceC:"43°",
    choiceD:"19°",
    correct:"A"
    },
      {
    question:"Which shape does NOT have four sides?",
    choiceA:"Parallelogram",
    choiceB:"Rhombus",
    choiceC:"Triangle",
    choiceD:"Square",
    correct:"C"
    },
      {
    question:"Which force keeps you down to Earth?",
    choiceA:"Gravitational force",
    choiceB:"Magnetical force",
    choiceC:"Electrical force",
    choiceD:"Frictional force",
    correct:"A"
    },
      {
    question:"Which of these words is a noun?",
    choiceA:"They",
    choiceB:"Cat",
    choiceC:"Big",
    choiceD:"Eat",
    correct:"B"
    },
      {
    question:"What is the most abundant gas in Earth’s atmosphere?",
    choiceA:"Oxygen",
    choiceB:"Nitrogen",
    choiceC:"Carbon dioxide",
    choiceD:"Hydrogen",
    correct:"A"
    },

    {
    question:"How much is quarter?",
    choiceA:"1/2",
    choiceB:"1/3",
    choiceC:"1/4",
    choiceD:"1/2",
    correct:"A"
    },

    {
    question:"How long does the Earth take to rotate  around its axis?",
    choiceA:"1 week",
    choiceB:"1 day",
    choiceC:"1 year",
    choiceD:"1 month",
    correct:"B"
    },
   
      {
    question:"Which  planet is most hottest in solar system?",
    choiceA:"Mars",
    choiceB:"Venus",
    choiceC:"Jupitur",
    choiceD:"Mercury",
    correct:"B"
    },
   
      {
    question:"Which Apollo mission landed the first humans on the moon?",
    choiceA:"Apollo09",
    choiceB:"Apollo07",
    choiceC:"Apollo11",
    choiceD:"Apollo13",
    correct:"A"
    },
   
      {
    question:"In which city can you visit the Statue Of Liberty?",
    choiceA:"New York",
    choiceB:"Washington DC",
    choiceC:"Greenwich",
    choiceD:"Tornoto",
    correct:"A"
    },
   
      {
    question:"What is the longest bone in the human body?",
    choiceA:"Femur",
    choiceB:"Tibia",
    choiceC:"Skull",
    choiceD:"Scapula",
    correct:"A"
    },
   
      {
    question:"What kind of animal is a dolphin?",
    choiceA:"Fish",
    choiceB:"Mammal",
    choiceC:"Reptile",
    choiceD:"Amphibian",
    correct:"A"
    },
   
      {
    question:"What is 150% of 50?",
    choiceA:"55",
    choiceB:"65",
    choiceC:"75",
    choiceD:"500",
    correct:"A"
    },
   
      {
    question:"Which Williams sister has won more Grand Slam titles?",
    choiceA:"Isha Price",
    choiceB:"Yetunde Price",
    choiceC:"Lyndrea Price",
    choiceD:"Serena",
    correct:"A"
    },
   
      {
    question:"In which year was the first-ever Wimbledon Championship held?",
    choiceA:"1865",
    choiceB:"1887",
    choiceC:"1881",
    choiceD:"1871",
    correct:"A"
    },
   
      {
    question:"What’s the shortcut for  the “copy” function on most computers?",
    choiceA:"ctrl V",
    choiceB:"ctrl C",
    choiceC:"ctrl A",
    choiceD:"ctrl D",
    correct:"A"
    },
   
      {
    question:"Who is often called the father of computer?",
    choiceA:"W.G Grace",
    choiceB:"Arthur Clarke",
    choiceC:"John Lennon ",
    choiceD:"Charles Babbage",
    correct:"A"
    },
   
      {
    question:"In which year world war 1 begin ?",
    choiceA:"1915",
    choiceB:"1913",
    choiceC:"1920",
    choiceD:"1914",
    correct:"D"
    },
   
      {
    question:"How many teeth does a adult have?",
    choiceA:"34",
    choiceB:"30",
    choiceC:"32",
    choiceD:"36",
    correct:"C"
    },
   
      {
    question:"Which of the following birds is known for its intelligence?",
    choiceA:"Owl",
    choiceB:"Crow",
    choiceC:"Kingfisher",
    choiceD:"Sparrow",
    correct:"A"
    },
   
      {
    question:"In which direction does the sun set?",
    choiceA:"North",
    choiceB:"South",
    choiceC:"East",
    choiceD:"West",
    correct:"D"
    },
   
]
let lastQuestion = 0;
//const lastQuestion = questions.length-1
let runningQuestion=0
let count =0 
let score =0
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let randomQuestion=[];

function renderQuestion(){
let q= questions[runningQuestion]
question.innerHTML = "<p>"+ q.question +"</p>";
// qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
  randomQuestion=getRandom(question,10);
  console.log(randomQuestion);
  lastQuestion=randomQuestion.length-1;

    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/randomQuestion.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

function getRandom(arr, n) {
  var result = new Array(n),//result[0,1,2,3,4]
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    //n=5  
    console.log("n",n);
  while (n--) {//n=4
      console.log("n",n);
      console.log("len",len);
      console.log("Math.random()",Math.random());
      console.log("Math.random() * len",Math.random() * len)
      console.log(" Math.floor(Math.random() * len)", Math.floor(Math.random() * len));
      var x = Math.floor(Math.random() * len);
   //   n=4
  //    x=4

   //   result[4]=arr[4 in taken?taken[4]:4]
      result[n] = arr[x in taken ? taken[x] : x];
//taken[4]=9 in taken ?taken[9]:9;
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}


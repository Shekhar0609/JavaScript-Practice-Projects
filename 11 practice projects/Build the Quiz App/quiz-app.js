const questions = [
  {
    'que': "Which of the following is a Markup Language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScricpt",
    'd': "PHP",
   'correct': "a",
  },
  {
    'que': "What year was JavaScript Launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "None of the above",
    'correct': "b",
  },
  {
    'que': "What does CSS sttands for?",
    'a': "Hyper Text Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Cascadine Sheet Style",
    'correct':"b"
  },
];

let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;
const submitBtn = document.querySelector(".submit-btn");
const question = document.querySelector(".question");
const optionInputs = document.querySelectorAll(".optionInput");
const loadQuestion = () => {
    if(index === total) {
        return endQuiz();
    }
    reset();
  const data = questions[index];
  question.innerText = `${index + 1}. ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
      (input) => {
           if (input.checked) {
            answer = input.value;
            } 
        }
    )
    return answer;
}


const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
   const box = document.querySelector(".box")
   box.innerHTML = `
   <div>
   <h3> Thank you for playing the Quiz.
   <h2>${right} / ${total} are correct.</h2>
   </h3>
   </div>
   `
}

loadQuestion();

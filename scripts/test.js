class passedQuestions
{
    is_answer_correct = false;
    is_answer_passed = false;
}

numOfQuestions = 0;


currentQuestion = 0;

let questions;



async function main()
{
if(typeof(Storage) !== 'undefined')
{
    API = localStorage.getItem("API");
   // alert(API);
    let response = await fetch(API);
    questions = await response.json();
    printQuiz(questions, 0);
    numOfQuestions = questions.length;
}

passed_questions[numOfQuestions] = new passedQuestions;
    
}
function nextQuestion()
{
    if(currentQuestion != numOfQuestions - 1)
    {
        printQuiz(questions, currentQuestion + 1);
    }
}

function prevQuestion()
{
    if(currentQuestion > 0)
    {
        printQuiz(questions, currentQuestion - 1);
    }
}

function pass_answer()
{
    
}


function printQuiz(questions, i)
{
   
 //  alert(questions.length);
  //  alert(questions[0].answers.answer_a);
    body = document.body; 
    str = '<p>'+ questions[i].question + '</p> <form>'
      +'<lable for="first_answer"><xmp>'+ questions[i].answers.answer_a +'</xmp></lable>' 
      +'<input type="radio" id="first_answer" name="answer"><br>';
      if(questions[i].answers.answer_b) 
      {
          str += '<lable for="second_answer"><xmp>'+ questions[i].answers.answer_b +'</xmp></lable>' 
          + '<input type="radio" id="second_answer" name="answer"><br>';
      }
      if(questions[i].answers.answer_c) 
      {
          str += '<lable for="third_answer"><xmp>'+ questions[i].answers.answer_c +'</xmp></lable>'
          +'<input type="radio" id="third_answer" name="answer"><br>';
      }
      if(questions[i].answers.answer_d) 
      {
          str += '<lable for="fourth_answer"><xmp>'+ questions[i].answers.answer_d +'</xmp></lable>'
          +'<input type="radio" id="fourth_answer" name="answer"><br>';
      }
      if(questions[i].answers.answer_e) 
      {
          str += '<lable for="fifth_answer"><xmp>'+ questions[i].answers.answer_e +'</xmp></lable>'
          +'<input type="radio" id="fifth_answer" name="answer"><br>';
      }
      if(questions[i].answers.answer_f) 
      {
          str += '<lable for="sixth_answer"><xmp>'+ questions[i].answers.answer_f +'</xmp></lable>'
          +'<input type="radio" id="sixth_answer" name="answer"><br>';
      }
      str += '<input type="submit" value="answer"></form><br><button class="quiz_button" onclick="prevQuestion()">Prev Question</button>' +
      '<button class="quiz_button" onclick="nextQuestion()">Next Question</button>';
      body.innerHTML  = str;
      currentQuestion = i;

}


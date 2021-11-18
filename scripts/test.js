async function main()
{
if(typeof(Storage) !== 'undefined')
{
    API = localStorage.getItem("API");
    //alert(API);
    let response = await fetch(API);
    let questions = await response.json();
    startQuiz(questions);
}
    
}

function startQuiz(questions)
{
   i = 0;
 //  alert(questions.length);
  //  alert(questions[0].answers.answer_a);
    body = document.body; 
    str = '<p>'+ questions[i].question + '</p> <form>'
      +'<lable for="first_answer">'+ questions[i].answers.answer_a +'</lable>' 
      +'<input type="radio" id="first_answer"><br>';
      if(questions[i].answers.answer_b) 
      {
          str += '<lable for="second_answer">'+ questions[i].answers.answer_b +'</lable>' 
          + '<input type="radio" id="second_answer"><br>';
      }
      if(questions[i].answers.answer_c) 
      {
          str += '<lable for="third_answer">'+ questions[i].answers.answer_c +'</lable>'
          +'<input type="radio" id="third_answer"><br>';
      }
      if(questions[i].answers.answer_d) 
      {
          str += '<lable for="fourth_answer">'+ questions[i].answers.answer_d +'</lable>'
          +'<input type="radio" id="fourth_answer"><br>';
      }
      if(questions[i].answers.answer_e) 
      {
          str += '<lable for="fifth_answer">'+ questions[i].answers.answer_e +'</lable>'
          +'<input type="radio" id="fifth_answer"><br>';
      }
      if(questions[i].answers.answer_f) 
      {
          str += '<lable for="sixth_answer">'+ questions[i].answers.answer_f +'</lable>'
          +'<input type="radio" id="sixth_answer"><br>';
      }
      str += '</form>';
      body.innerHTML  = str;

}
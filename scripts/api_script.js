const form =  document.getElementById('startingForm');
form.addEventListener('submit', async function (event)
{
    event.preventDefault();
    API ='https://quizapi.io/api/v1/questions?apiKey=J35Z0YLOZ6U7Vf2THXXQe8FbRRvvq9FEOmHFgQO4';

    difficultyList = document.getElementById('selectDifficulty');
    difficultyIndex = difficultyList.selectedIndex;
    difficulty = difficultyList[difficultyIndex].value;

    categoryList = document.getElementById('selectCategory');
    categoryIndex = categoryList.getSelectedIndex;
    category = categoryList[categoryIndex];

    limitElement = form.elements;
    limit = limitElement['numOfQuestions'].value;
   // alert(limit);

    if(limit)
    {
        API += '&limit=' + limit.toString();
    }
    if(difficulty)
    {
        API += '&difficulty=' + difficulty.toString();
    }
    if(category)
    {
        API += '&category=' + category.toString();
    }
 //   alert(API);
   

    let response = await fetch(API);
    let questions = await response.json();

    startQuiz(questions);
 //   alert(questions.length);
   // alert(questions[0].difficulty);
})

function startQuiz(questions)
{
   i = 0;
 //  alert(questions.length);
  //  alert(questions[0].answers.answer_a);
    form.parentNode.removeChild(form);
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
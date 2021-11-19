numOfQuestions = 0;

currentQuestion = 0;
let button1, button2, button3, button4, button5, button6;
let div;

let i = 0;

let questions;
async function main()
{

if(typeof(Storage) !== 'undefined')
{
    API = localStorage.getItem("API");
    //alert(API);
    let response = await fetch(API);
    questions = await response.json();
    printQuiz(questions, 0);
    numOfQuestions = questions.length;
   // alert(questions[0].category);
    //alert(questions[0].difficulty);
}
}

let passed_questions = new Array(numOfQuestions).fill(false);



function callculate_result()
{
    difficulty = localStorage.getItem("difficulty");
    category = localStorage.getItem("category");
    let percents = 0;
    let num_of_correct_answers = 0;

    for(let j of passed_questions)
    {
        if(j) num_of_correct_answers++;
      
    }
    //alert(num_of_correct_answers);
    let num_of_incorrect_answers = numOfQuestions - num_of_correct_answers;
    if(difficulty == 'medium')
    {
        percents = num_of_correct_answers * 3 - num_of_incorrect_answers * 3;
    }
    else if(difficulty == 'hard')
    {
        percents = num_of_correct_answers * 5 - num_of_incorrect_answers * 5;
    }
    else
    {
        percents = num_of_correct_answers - num_of_incorrect_answers;
    }
   
    localStorage.setItem("percents", percents.toString());
    localStorage.setItem("category", category);
   // alert(percents);
    window.location="index.html";
}
  function answer_a()
  {
    
          if(questions[currentQuestion].correct_answers.answer_a_correct  == 'true')
          {
            passed_questions[currentQuestion] = true;
            
          }
          else
          {
            passed_questions[currentQuestion] = false;
          }
         // alert(passed_questions[currentQuestion]);
          i++;
          if(i < numOfQuestions) printQuiz(questions, i);
          else
          {
            callculate_result();
          }

}
     function answer_b()
  {
    
          if(questions[currentQuestion].correct_answers.answer_b_correct  == 'true')
          {
            passed_questions[currentQuestion] = true;
            
          }
          else
          {
            passed_questions[currentQuestion] = false;
          }
        // alert(passed_questions[currentQuestion]);
          i++;
          if(i < numOfQuestions) printQuiz(questions, i);
          else
          {
            callculate_result();
          }
        }
    function answer_c()
  {
    
          if(questions[currentQuestion].correct_answers.answer_c_correct == 'true')
          {
            passed_questions[currentQuestion] = true;
            
          }
          else
          {
            passed_questions[currentQuestion] = false;
          }
         // alert(passed_questions[currentQuestion]);
          i++;
          if(i < numOfQuestions) printQuiz(questions, i);
          else
          {
            callculate_result();
          }
        }
        function answer_d()
        {
          
                if(questions[currentQuestion].correct_answers.answer_d_correct  == 'true')
                {
                  passed_questions[currentQuestion] = true;
                  
                }
                else
                {
                  passed_questions[currentQuestion] = false;
                }
               // alert(passed_questions[currentQuestion]);
                i++;
                if(i < numOfQuestions) printQuiz(questions, i);
                else
                 {
                 callculate_result();
                 }
              }
 function answer_e()
  {
    
          if(questions[currentQuestion].correct_answers.answer_e_correct  == 'true')
          {
            passed_questions[currentQuestion] = true;
            
          }
          else
          {
            passed_questions[currentQuestion] = false;
          }
         // alert(passed_questions[currentQuestion]);
          i++;
          if(i < numOfQuestions) printQuiz(questions, i);
          else
          {
            callculate_result();
          }
        }
 function answer_f()
  {
    
          if(questions[currentQuestion].correct_answers.answer_f_correct == 'true')
          {
            passed_questions[currentQuestion] = true;
            
          }
          else
          {
            passed_questions[currentQuestion] = false;
          }
         // alert(passed_questions[currentQuestion]);
          i++;
          if(i < numOfQuestions) printQuiz(questions, i);
          else
          {
            callculate_result();
          }
        }
function printQuiz(questions, i)
{
    //alert(questions.length);
    //alert(questions[0].answers.answer_a);
    if(i != 0) div.parentNode.removeChild(div);
    div = document.createElement('div');
    div.setAttribute("id", "buttons");
    document.body.appendChild(div);
    parag = document.getElementById("title");
    parag.innerHTML = questions[i].question;
   
    button1 = document.createElement('button');
    button1.innerHTML =  '<xmp>' +  questions[i].answers.answer_a + '</xmp>';
    button1.setAttribute("onclick", "answer_a()");
    button1.setAttribute("class", "button");
    button2 = document.createElement('button');
    button2.innerHTML ='<xmp>' +  questions[i].answers.answer_b + '</xmp>';
    button2.setAttribute("onclick", "answer_b()");
    button2.setAttribute("class", "button");
    document.getElementById("buttons").appendChild(button1);
    document.getElementById("buttons").appendChild(button2);
    if(questions[i].answers.answer_c) 
    {
        button3 = document.createElement('button');
        button3.innerHTML = '<xmp>' + questions[i].answers.answer_c+ '</xmp>';
        button3.setAttribute("onclick", "answer_c()");
        button3.setAttribute("class", "button");
        document.getElementById("buttons").appendChild(button3);
    }
    if(questions[i].answers.answer_d) 
    {
        button4 = document.createElement('button');
        button4.innerHTML = '<xmp>' +  questions[i].answers.answer_d + '</xmp>';
        button4.setAttribute("onclick", "answer_d()");
        button4.setAttribute("class", "button");
        document.getElementById("buttons").appendChild(button4);
    }
    if(questions[i].answers.answer_e) 
    {
        button5 = document.createElement('button');
        button5.innerHTML =  '<xmp>' +  questions[i].answers.answer_e + '</xmp>';
        button5.setAttribute("onclick", "answer_e()");
        button5.setAttribute("class", "button");
        document.getElementById("buttons").appendChild(button5);
    }
    if(questions[i].answers.answer_f) 
    {
        button6 = document.createElement('button');
        button6.innerHTML =  '<xmp>' +  questions[i].answers.answer_f + '</xmp>';
        button6.setAttribute("onclick", "answer_f()");
        button6.setAttribute("class", "button");
        document.getElementById("buttons").appendChild(button6);
    } 
    let form = document.createElement('form');   
    document.body.appendChild(form);
    //body.innerHTML  = str;
    currentQuestion = i;

   // let link = getElementById("style");
    //link.setAttribute("href", );
}
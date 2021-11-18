const form =  document.getElementById('startingForm');
form.addEventListener('submit', async function (event)
{
   // event.preventDefault();
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

   if(typeof(Storage) !== 'undefined')
   {
    if(limit)
    {
        API += '&limit=' + limit.toString();
       // localStorage.setItem('limit', '$limit=' + limit.toString());
    }
    if(difficulty)
    {
        API += '&difficulty=' + difficulty.toString();
        //localStorage.setItem('difficulty', '$difficulty=' + difficulty.toString());
    }
    if(category)
    {
        API += '&category=' + category.toString();
       //localStorage.setItem('category', '$category=' + category.toString());
    }
}
    localStorage.setItem("API", API);
   
})


const form =  document.getElementById('startingForm');
form.addEventListener('submit', async function (event)
{
   // event.preventDefault();
    API ='https://quizapi.io/api/v1/questions?apiKey=J35Z0YLOZ6U7Vf2THXXQe8FbRRvvq9FEOmHFgQO4';
    difficultyList = document.getElementById("selectDifficulty");
    let difficulty = difficultyList[difficultyList.selectedIndex].value;

    categoryList = document.getElementById("selectCategory");
    let category = categoryList[categoryList.selectedIndex].value;
  // alert(category);

    limitElement = form.elements;
    limit = limitElement['numOfQuestions'].value;
   // alert(limit);

   if(typeof(Storage) !== 'undefined')
   {
    if(limit !== null)
    {
        API += '&limit=' + limit.toString();
       // localStorage.setItem('limit', '$limit=' + limit.toString());
    }
    if(difficulty !== null)
    {
        API += '&difficulty=' + difficulty.toString();
        //localStorage.setItem('difficulty', '$difficulty=' + difficulty.toString());
    }
    if(category !== null)
    {
        API += '&category=' + category;
       // alert(category);
       //localStorage.setItem('category', '$category=' + category.toString());
    }
}
    localStorage.setItem("API", API);
    localStorage.setItem("difficulty", difficulty.toString());
    localStorage.setItem("category", category);
})

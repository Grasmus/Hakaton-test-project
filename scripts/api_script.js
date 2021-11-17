function main()
{
class Question
{
    constructor(info)
    {
        this.id = info["id"];
        this.qustion = info["question"];
        this.answers[0] = info["answer_a"];
        this.answers[1] = info["answer_b"];
        this.answers[2] = info["answer_c"];
        this.answers[3] = info["answer_d"];
        this.answers[4] = info["answer_e"];
        this.answers[4] = info["answer_f"];
        this.multiple_correct_answers = info["multiple_correct_answers"];
        this.correct_answers[0] =  info["answer_a_correct"];
        this.correct_answers[1] =  info["answer_b_correct"];
        this.correct_answers[2] =  info["answer_c_correct"];
        this.correct_answers[3] =  info["answer_d_correct"];
        this.correct_answers[4] =  info["answer_e_correct"];
        this.correct_answers[5] =  info["answer_f_correct"];
        this.category = info["category"];
        this.difficulty = info["difficulty"];
    }
    get_id()
    {
        return this.id;
    }
}

const API="http://quizapi.io/api/v1/questions?apiKey=J35Z0YLOZ6U7Vf2THXXQe8FbRRvvq9FEOmHFgQO4&limit=1";
function getAPI(api)
{
    const xmlHTTP= fetch(API);
    return xmlHTTP;
}
const APIstring = getAPI(API);
alert(APIstring);
//const APIJson = JSON.parse(APIstring);
function create_quiz()
{
    const question = new Question(APIJson);
    alert(question.get_id());
}
//create_quiz();
}
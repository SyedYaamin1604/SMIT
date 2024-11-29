const quizDiv = document.querySelector("#quiz-div");
const quizQuestionsDiv = document.querySelector('#quiz-questions');
const nextBtn = document.querySelector('#next');
let index = 0;
let totalScore = 0;
let totalQuestions = 0;
let questionsArr = [];

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const renderQuestion = () => {
    if (index < questionsArr.length) {
        const question = questionsArr[index];
        const answers = shuffleArray([...question.incorrectAnswers, question.correctAnswer]);

        quizQuestionsDiv.innerHTML = `
            <h1>Q ${index + 1}: ${question.question.text}</h1>
            <div>
                <ul id="quiz-questions-ul">
                    ${answers.map(answer => `
                        <li>
                            <label>
                                <input type="radio" name="choice" value="${answer}">
                                ${answer}
                            </label>
                        </li>`).join('')}
                </ul>
            </div>
        `;
    } else {

        quizDiv.innerHTML = `
            <h1>Quiz Completed</h1>
            <h1>Your score is: ${totalScore} out of ${totalQuestions * 10}</h1>
        `;
    }
};

nextBtn.addEventListener("click", () => {
    const selectedAnswer = document.querySelector('input[name="choice"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questionsArr[index].correctAnswer) {
            totalScore += 10;
        }
        index++;
        renderQuestion();
    } else {
        alert('Please select an answer before proceeding!!');
    }
});

const getQuestions = async () => {
    try {
        const response = await fetch("https://the-trivia-api.com/v2/questions");
        const data = await response.json();
        console.log(data);
        questionsArr = data;
        totalQuestions = data.length;
        renderQuestion();
    } catch (error) {
        console.error('Error ===>', error);
    }
};

getQuestions();

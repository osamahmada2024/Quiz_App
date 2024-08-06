//  call class on each question
class Question {
  constructor(question) {
    this.questionDB = document.querySelector("#question");
    this.answersDB = [
      document.querySelector("#an1"),
      document.querySelector("#an2"),
      document.querySelector("#an3"),
      document.querySelector("#an4"),
    ];
    this.question_ = question.question;
    this.incorrect = question.incorrect_answers;
    this.correct = question.correct_answer;
    this.answers = [this.correct, ...this.incorrect];
    this.isCorrect = false;
  }
  question_render() {
    this.questionDB.innerHTML = this.question_;
    this.answersDB.forEach((el, index) => {
      el.innerHTML = `<input type="radio" name="radio"><span>${this.answers[index]}</span>`;
    });
  }

  answer(checkElment) {
    this.isCorrect = checkElment[0].textContent === this.correct ? true : false;
  }
}
export default Question;

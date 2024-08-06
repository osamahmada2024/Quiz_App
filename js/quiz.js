import Questions from "./questions.js";
import Final from "./final.js";
class Quiz {
  constructor(quizDB, amount, questions) {
    this.quizDB = quizDB;
    this.finalDB = document.querySelector(".final");
    this.currentDB = document.querySelector("#current");
    this.allDB = document.querySelector("#all");
    this.allNum = amount;
    this.nextBtn = document.querySelector("#next");
    this.allDB.innerHTML = this.allNum;
    this.answered = 0;
    this.questions = this.set_questions(questions);
    this.render();
    this.nextBtn.addEventListener("click", this.next_question.bind(this));
  }
  set_questions(questions) {
    return questions.map((question) => new Questions(question));
  }

  render() {
    this.currentDB.innerHTML = this.answered + 1;
    this.questions[this.answered].question_render();
  }

  next_question() {
    const checkElment = this.questions[this.answered].answersDB.filter(
      (el) => el.firstChild.checked
    );
    if (checkElment.length == 0) {
      alert("you should answer");
    } else {
      this.questions[this.answered].answer(checkElment);
      this.answered++;
      if (this.answered == this.allNum) {
        this.endquizapp();
      } else {
        this.render();
      }
    }
  }
  endquizapp() {
    this.finalDB.style.display = "block";
    this.quizDB.style.display = "none";
    const correct = this.countcorrectanswers();
    new Final(correct, this.allNum);
  }
  countcorrectanswers() {
    let count = 0;
    this.questions.forEach((el) => {
      if (el.isCorrect) {
        count++;
      }
    });
    return count;
  }
}
export default Quiz;

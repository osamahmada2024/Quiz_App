import Quiz from "./quiz.js";
class Settings {
  constructor() {
    this.SettingsDB = document.querySelector(".settings");
    this.quizDB = document.querySelector(".quiz");
    this.CategoyDB = document.querySelector("#category");
    this.difficulty = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];
    this.amount = document.querySelector("#amount");
    this.Start = document.querySelector("#Start");
    this.Start.addEventListener("click", this.StartQuiz);
    this.Quiz = {};
  }
  StartQuiz = async () => {
    try {
      const CategoyID = this.CategoyDB.value;
      const amountID = this.getamount();
      const difficultyID = this.getdifficulty().id;
      const url = `https://opentdb.com/api.php?amount=${amountID}&category=${CategoyID}&difficulty=${difficultyID}&type=multiple`;
      let { results } = await this.fetch(url);
      const questions = results;
      this.toggleElements();
      this.Quiz = new Quiz(this.quizDB, amountID, questions);
    } catch (err) {
      window.alert(err)
    }
  };
  getamount = () => {
    let amount_result = this.amount.value;
    if (amount_result > 0 && amount_result < 20) {
      return amount_result;
    } else {
      window.alert("please enter number of amount between 0,20");
      location.reload()
    }
  };
  getdifficulty = () => {
    let difficulty_result = this.difficulty.find((i) => i.checked);
    if (difficulty_result !== undefined) {
      return difficulty_result;
    } else {
      window.alert("please choose Difficulty level");
    }
  };
  fetch = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };
  toggleElements = () => {
    this.SettingsDB.style.display = "none";
    this.quizDB.style.display = "block";
  };
}
new Settings();

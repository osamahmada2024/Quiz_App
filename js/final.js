class Final {
  constructor(correctanswers, total) {
    this.score = document.querySelector("#score");
    this.againBtn = document.querySelector("#again");
    this.score_render(correctanswers, total);
    this.againBtn.addEventListener("click", this.Start_Again);
    this.score_render(correctanswers, total);
  }
  Start_Again() {
    location.reload();
  }

  score_render(correctanswers, total) {
    this.score.textContent = `You Answered ${correctanswers} out of ${total} correct`;
  }
}
export default Final;

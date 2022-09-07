const options = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player-display");
const opponentDisplay = document.getElementById("opponent-display");
const result = document.getElementById("result");
const opponentImg = document.getElementById("opponent-img");
let playerPoint = 0,
  opponentPoint = 0;

document.addEventListener("click", ({ target }) => {
  if (target.matches(".choose")) {
    const selected = target.alt;
    const imgs = document.querySelectorAll(".choose");
    imgs.forEach((img) => {
      if (img != target) img.style.visibility = "hidden";
    });
    opponentImg.style.display = "none";
    target.classList.remove("choose");
    setTimeout(() => {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      opponentImg.src = `${randomChoice}.svg`;
      opponentImg.style.display = "";
      if (
        (selected == options[0] && randomChoice == options[2]) ||
        (selected == options[1] && randomChoice == options[0]) ||
        (selected == options[2] && randomChoice == options[1])
      ) {
        playerPoint++;
        for (const child of playerDisplay.children) {
          if (!child.classList.contains("text-bg-primary")) {
            child.classList.add("text-bg-primary");
            break;
          }
        }
      } else if (
        (selected == options[2] && randomChoice == options[0]) ||
        (selected == options[0] && randomChoice == options[1]) ||
        (selected == options[1] && randomChoice == options[2])
      ) {
        opponentPoint++;
        for (const child of opponentDisplay.children) {
          if (!child.classList.contains("text-bg-primary")) {
            child.classList.add("text-bg-primary");
            break;
          }
        }
      }
      imgs.forEach((img) => {
        img.style.visibility = "visible";
      });
      target.classList.add("choose");

      if (playerPoint === 3 || opponentPoint === 3) {
        result.innerHTML = playerPoint === 3 ? "You Win!" : "You Lose!";
        setTimeout(() => {
          result.innerHTML = "";
          opponentImg.style.display = "none";
          playerPoint = 0;
          opponentPoint = 0;
          for (const child of opponentDisplay.children) {
            child.classList.remove("text-bg-primary");
          }
          for (const child of playerDisplay.children) {
            child.classList.remove("text-bg-primary");
          }
        }, 3000);
      }
    }, 3000);
  }
});

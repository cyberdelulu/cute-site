let noCount = 0;

const messages = [
  "Think again...",
  "No wayyy 😭",
  "Are you sure??",
  "Really?? 😢",
  "Last chance...",
  "You're breaking my heart 💔"
];

function pressNo() {
  noCount++;

  let yesBtn = document.getElementById("yesBtn");
  let noBtn = document.getElementById("noBtn");
  let msg = document.getElementById("message");

  msg.innerText = messages[noCount - 1] || "Please say yes 🥺";

  yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;
  noBtn.style.transform = `scale(${1 - noCount * 0.1})`;

  if (noCount > 5) {
    noBtn.style.display = "none";
  }
}

function goYes() {
  window.location.href = "yes.html";
}

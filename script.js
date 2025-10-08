const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let step = 1;

yesBtn.addEventListener("click", () => {
  if (step === 1) {
    question.textContent = "Barışıyor musun? 🤝";
    step++;
  } else if (step === 2) {
    question.textContent =
      "Evet diyeceğini biliyordum 💕 Ben de seni çok seviyorum 💫";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    document.body.style.background =
      "linear-gradient(135deg, #a1ffce, #faffd1)";
  }
});

noBtn.addEventListener("click", () => {
  // Hayır butonunu rastgele konuma taşı
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

let thinkOpacity = 1;
let yesScale = 1;

function yesClicked() {
  const el = document.getElementById("answer-text");
  const yesBtn = document.getElementById("yes-btn");
  const thinkBtn = document.getElementById("think-btn");

  if (el) {
    el.textContent =
      "Yay! Then it's a date – entry together, full hype, zero competition. 🎉 Ab party mein spotlight thoda zyada hamari entry pe hi rahegi.";
  }

  if (yesBtn) {
    yesBtn.style.transform = "scale(1.2)";
  }

  if (thinkBtn) {
    thinkBtn.style.opacity = "0";
    thinkBtn.style.pointerEvents = "none";
  }

  // CONFETTI / PARTY POPPERS
  if (typeof confetti === "function") {
    // left side
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { x: 0.1, y: 0.6 }
    });

    // right side
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { x: 0.9, y: 0.6 }
    });

    // center
    confetti({
      particleCount: 90,
      spread: 100,
      startVelocity: 45,
      origin: { x: 0.5, y: 0.4 }
    });
  }
}

function thinkClicked() {
  const thinkBtn = document.getElementById("think-btn");
  const yesBtn = document.getElementById("yes-btn");
  const el = document.getElementById("answer-text");

  if (!thinkBtn || !yesBtn) return;

  thinkOpacity -= 0.25;
  if (thinkOpacity < 0) thinkOpacity = 0;
  thinkBtn.style.opacity = thinkOpacity.toString();

  yesScale += 0.08;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (el) {
    if (thinkOpacity > 0) {
      el.textContent =
        "Thinking is allowed… lekin jitna zyada sochoge, utna hi ‘Yes’ option cute lagne lagega 😏";
    } else {
      el.textContent =
        "Ab to clearly universe bhi ‘Yes’ hi bol raha hain… bas aapka last tap baaki hai. 💗";
      thinkBtn.style.pointerEvents = "none";
    }
  }
}

simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 12, // required
  day: 0, // required
  hours: 12, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: {
      singular: "hari",
      plural: "hari",
    },
    hours: {
      singular: "jam",
      plural: "jam",
    },
    minutes: {
      singular: "menit",
      plural: "menit",
    },
    seconds: {
      singular: "detik",
      plural: "detik",
    },
  },
});

// open

// document.getElementById("copyButton").addEventListener("click", function () {
//   let nomor = this.getAttribute("data-nomer");
//   let textArea = document.createElement("textarea");

//   textArea.value = nomor;
//   document.body.appendChild(textArea);

//   textArea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textArea);
// });

const fadeOutBackground = () => {
  let bgOpacity = 1;
  const background = document.getElementById("intro");

  const fadeOut = setInterval(() => {
    if (bgOpacity > 0) {
      bgOpacity -= 0.01;
      background.style.opacity = bgOpacity;
    } else {
      clearInterval(fadeOut);
      document.body.style.overflowY = "scroll";
    }
  }, 10);
};

const buka = async () => {
  fadeOutBackground();
  await confetti({
    origin: { y: 0.8 },
    zIndex: 1057,
  });
  animation();
};

const animation = () => {
  const duration = 10 * 1000;
  const animationEnd = Date.now() + duration;
  let skew = 1;

  let randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  (function frame() {
    const timeLeft = animationEnd - Date.now();
    const ticks = Math.max(200, 500 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        y: Math.random() * skew - 0.2,
      },
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      shapes: ["heart"],
      gravity: randomInRange(0.5, 1),
      scalar: randomInRange(1, 2),
      drift: randomInRange(-0.5, 0.5),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
};

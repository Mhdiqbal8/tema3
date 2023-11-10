simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 12, // required
  day: -15, // required
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

const buka = async () => {
  document.getElementById("daftar-ucapan").innerHTML = comment.renderLoading(
    pagination.getPer()
  );
  document.querySelector("body").style.overflowY = "scroll";

  opacity("welcome");
  // document.getElementById("tombol-musik").style.display = "block";
  AOS.init();
  audio.play();

  await confetti({
    origin: { y: 0.8 },
    zIndex: 1057,
  });
  animation();

  timer();
};

// salin

document.getElementById("copyButton").addEventListener("click", function () {
  let nomor = this.getAttribute("data-nomer");
  let textArea = document.createElement("textarea");

  textArea.value = nomor;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});

// -------------------- Reload ke menu home ---------------------//
document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({
    top: document.querySelector("main #welcome").offsetTop,
    behavior: "smooth",
  });
});

// -------------------- Reload ke menu home ---------------------//

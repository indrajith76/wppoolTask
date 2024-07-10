window.onload = function () {
  document.getElementById("preloader").style.display = "none";
};

const menu = document.getElementById("menu");

document.getElementById("menu-btn").addEventListener("click", () => {
  menu.classList.add("-top-5");
});

document.getElementById("menu-close").addEventListener("click", () => {
  menu.classList.remove("-top-5");
});

// handle scroll effect on navbar
document.onscroll = function () {
  const theWPPOOLIndex = document.getElementById("theWPPOOLIndex");
  const nav = document.querySelector("nav");
  const logo = document.getElementById("logo");
  const shareIcon = document.getElementById("shareIcon");
  const barIcon = document.getElementById("barIcon");
  const downloadBtn = document.getElementById("download");

  if (theWPPOOLIndex.getBoundingClientRect().top <= 0) {
    nav.classList.add("bg-[#F3F3F3]", "p-3", "shadow-lg");
    nav.classList.remove("bg-[#2042b6]");
    logo.src = "/images/icons/logo2.png";
    shareIcon.classList.add("brightness-0");
    barIcon.classList.add("brightness-0");
    downloadBtn.classList.add("text-black", "border-[#115CD9]");
  } else {
    nav.classList.remove("bg-[#F3F3F3]", "p-3", "shadow-lg");
    nav.classList.add("bg-[#2042b6]", "p-3");
    logo.src = "/images/icons/logo.png";
    shareIcon.classList.remove("brightness-0");
    barIcon.classList.remove("brightness-0");
    downloadBtn.classList.remove("text-black", "border-[#115CD9]");
  }
};

// chartjs
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        data: [-10, 20, 30, 50, 65, 75, 60],
        borderWidth: 1,
        backgroundColor: "#FC714D",
      },
      {
        label: "Google",
        data: [-10, 30, 40, 60, 75, 60, 65],
        borderWidth: 1,
        backgroundColor: "#615DE3",
      },
      {
        label: "Microsoft",
        data: [-10, 25, 30, 40, 55, 30, 50],
        borderWidth: 1,
        backgroundColor: "#AFCD80",
      },
      {
        label: "Twitter",
        data: [-10, 40, 30, 50, 50, 40, 75],
        borderWidth: 1,
        backgroundColor: "#6F34A1",
      },
    ],
  },

  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.4,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

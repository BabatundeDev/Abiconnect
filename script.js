const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && window.innerWidth <= 768) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  document.getElementById("prev-slide").addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = slides.length - 1;
    }
    updateSlider();
  });

  document.getElementById("next-slide").addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateSlider();
  });

  function updateSlider() {
    const translateX = -index * (slides[0].offsetWidth + 20);
    slider.style.transform = `translateX(${translateX}px)`;
  }
});

function sendEmail() {
  let userEmail = document.getElementById("userEmail");

  if (userEmail.value === "") {
    alert("Please enter your email!");
    return;
  }

  let recipient = "abiconnectdigitaledu@gmail.com";
  let subject = "Subscription Request";
  let body = `Hello, I want to subscribe using this email: ${userEmail.value}`;

  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  setTimeout(() => {
    userEmail.value = "";
  }, 3000);
}

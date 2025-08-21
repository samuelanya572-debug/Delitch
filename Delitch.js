// Fade in on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Fade out on page navigation
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.href;
      document.body.classList.remove("fade-in");
      setTimeout(() => {
        window.location.href = target;
      }, 800); // match transition duration
    });
  }
});

// Cake button goes to message page
const cakeButton = document.getElementById("cakeButton");
if (cakeButton) {
  cakeButton.addEventListener("click", () => {
    document.body.classList.remove("fade-in");
    setTimeout(() => {
      window.location.href = "message.html";
    }, 800);
  });
}

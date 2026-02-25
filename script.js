const btn = document.getElementById("btn");
const hint = document.getElementById("hint");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
  title.textContent = "Thanks!";
  hint.textContent = "Button works ✅ JavaScript is running.";
});

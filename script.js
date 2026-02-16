const $ = (id) => document.getElementById(id);

const themeBtn = $("themeBtn");
const menuBtn = $("menuBtn");
const navbar = $("navbar");
const yearEl = $("year");
const toast = $("toast");
const form = $("contactForm");


yearEl.textContent = new Date().getFullYear();


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light");

function updateThemeIcon() {
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "🌞" : "🌙";
}
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});


menuBtn.addEventListener("click", () => navbar.classList.toggle("open"));
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && e.target !== menuBtn) navbar.classList.remove("open");
});


document.querySelectorAll(".navlink").forEach((a) => {
  a.addEventListener("click", () => navbar.classList.remove("open"));
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = $("name").value.trim();
  const email = $("email").value.trim();
  const message = $("message").value.trim();

  if (!name || !email || !message) {
    toast.textContent = "Please fill all fields.";
    return;
  }

  toast.textContent = `Thanks, ${name}! Message saved (demo). ✅`;
  form.reset();

  setTimeout(() => (toast.textContent = ""), 3500);
});


$("live1").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Host on GitHub Pages and paste Live link here ✅");
});
$("live2").addEventListener("click", (e) => {
  e.preventDefault();
  alert("If you don’t have a live link, keep only 'Code' button ✅");
});
$("live3").addEventListener("click", (e) => {
  e.preventDefault();
  alert("First upload To-Do project, then add Live link ✅");
});
$("code3").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Create a new repo (todo-app) and paste that repo link here ✅");
});

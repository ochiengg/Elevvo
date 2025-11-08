// Sidebar Toggle
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Smooth scroll for CTA
document.getElementById("cta-btn").addEventListener("click", () => {
  document.querySelector("#pricing").scrollIntoView({ behavior: "smooth" });
});

// Theme Toggle Switch
const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
/* ===== Dark Mode ===== */
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === "dark" ? "" : "dark";
};

/* ===== Scrollspy ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (scrollY >= top) current = sec.id;
  });

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

/* ===== Reveal Animations ===== */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
});
reveals.forEach(r => observer.observe(r));

/* ===== Publication Filters ===== */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const f = btn.dataset.filter;
    document.querySelectorAll(".pub-item").forEach(p => {
      p.style.display = (f === "all" || p.classList.contains(f)) ? "block" : "none";
    });
  };
});

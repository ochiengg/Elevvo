document.addEventListener("DOMContentLoaded", () => {
  const ctaBtn = document.getElementById("cta-btn");
  const pricingSection = document.querySelector(".pricing");

  ctaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pricingSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
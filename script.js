// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Order form submission to WhatsApp
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const orderdetails = document.getElementById("description").value.trim();
  const size = document.getElementById("size").value;
  const flavor = document.getElementById("flavor").value;
  const quantity = document.getElementById("quantity").value.trim();
  const order = `Size: ${size}, Flavor: ${flavor}, Quantity: ${quantity}`;

  const phoneNumber = "254748178005";

  // Build correct WhatsApp URL
  const text = `Name: ${name}\n` + `Order: ${order}\n` + `Message: ${orderdetails}`;

  const url =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");

  // Button animation
  const submitButton = this.querySelector(".submit-button");
  submitButton.textContent = "Opening WhatsApp...";
  submitButton.style.opacity = "0.7";

  setTimeout(() => {
    submitButton.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
         <path d="M17.472 14.382c...Z"/>
      </svg>
      Place Order via WhatsApp
    `;
    submitButton.style.opacity = "1";
  }, 2000);
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease forwards";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".product-card, .testimonial-card, .contact-card")
  .forEach((el) => {
    observer.observe(el);
  });

// Contact Form Validation
document.querySelector("#contact-form").addEventListener("submit", function (e) {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    e.preventDefault();
  }
});

// Project Filtering
document.querySelector("#filter").addEventListener("change", function () {
  const category = this.value;
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (category === "All" || project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});
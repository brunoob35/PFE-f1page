// Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

if (next && prev) {
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
  setInterval(nextSlide, 5000);
  showSlide(slideIndex);
}

// Validação do formulário
const form = document.getElementById("formContato");
const msgForm = document.getElementById("msgForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      msgForm.textContent = "Por favor, preencha todos os campos.";
      msgForm.style.color = "red";
    } else {
      msgForm.textContent = "Mensagem enviada com sucesso!";
      msgForm.style.color = "green";
      form.reset();
    }
  });
}

// Filtro de pilotos
const busca = document.getElementById("buscaPiloto");
const pilotos = document.querySelectorAll("#listaPilotos .piloto");

if (busca) {
  busca.addEventListener("input", function () {
    const filtro = busca.value.toLowerCase();
    pilotos.forEach((piloto) => {
      const nome = piloto.querySelector("h3").textContent.toLowerCase();
      piloto.style.display = nome.includes(filtro) ? "flex" : "none";
    });
  });
}

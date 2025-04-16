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

// Modal ao clicar em piloto
const modal = document.getElementById("modalPiloto");
const modalNome = document.getElementById("modalNome");
const modalDescricao = document.getElementById("modalDescricao");
const fecharModal = document.querySelector(".fechar");

pilotos.forEach((piloto) => {
  piloto.addEventListener("click", () => {
    modalNome.textContent = piloto.dataset.nome;
    modalDescricao.textContent = piloto.dataset.desc;
    modal.style.display = "block";
  });
});

if (fecharModal) {
  fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

// Botão "voltar ao topo"
const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contador regressivo
const dataCorrida = new Date("2025-04-20T14:00:00");
const contadorEl = document.getElementById("contador");

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCorrida - agora;

  if (diferenca <= 0) {
    contadorEl.textContent = "A corrida já começou!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  contadorEl.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Dark mode toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
let fonte = 100;
let fundoAlternado = false;
let linksDestacados = false;
let contrasteAtivo = false;

function aumentarFonte() {
  fonte += 10;
  document.body.style.fontSize = fonte + "%";
}

function diminuirFonte() {
  if (fonte > 60) {
    fonte -= 10;
    document.body.style.fontSize = fonte + "%";
  }
}

function mudarFundo() {
  fundoAlternado = !fundoAlternado;
  document.body.style.background = fundoAlternado ? "#ffe4e1" : "#d37292";
}

function alternarContraste() {
  contrasteAtivo = !contrasteAtivo;
  document.body.classList.toggle("contraste", contrasteAtivo);
}

function destacarLinks() {
  linksDestacados = !linksDestacados;
  if (linksDestacados) {
    document.body.classList.add("destacar-links");
  } else {
    document.body.classList.remove("destacar-links");
  }
}

function resetar() {
  fonte = 100;
  document.body.style.fontSize = "100%";
  fundoAlternado = false;
  document.body.style.background = "#f9f4fa";
  contrasteAtivo = false;
  document.body.classList.remove("contraste");
  linksDestacados = false;
  document.body.classList.remove("destacar-links");
}

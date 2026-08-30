// PÁGINA DE DETALHES DO PRODUTO
const botaoCarrinho = document.querySelector(".detail-btn");
const tituloProduto = document.querySelector(".detail-title");

if (botaoCarrinho && tituloProduto) {
  botaoCarrinho.addEventListener("click", function () {
    const nomeProduto = tituloProduto.innerText;

    mostrarAvisoCopia(nomeProduto + " foi selecionado para o carrinho!");
  });
}

// BOTÃO COPIAR LINK DA PÁGINA
const botaoCopiar = document.getElementById("btn-copy");

if (botaoCopiar) {
  botaoCopiar.addEventListener("click", async function () {
    const linkPagina = window.location.href;

    try {
      await navigator.clipboard.writeText(linkPagina);
      mostrarAvisoCopia("Link copiado!");
    } catch (erro) {
      mostrarAvisoCopia("Não foi possível copiar o link.");
    }
  });
}

function mostrarAvisoCopia(mensagem) {
  let aviso = document.getElementById("aviso-copia");

  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso-copia";
    aviso.className = "aviso-copia";
    aviso.setAttribute("role", "status");
    document.body.appendChild(aviso);
  }

  aviso.textContent = mensagem;
  aviso.classList.add("mostrar");

  setTimeout(function () {
    aviso.classList.remove("mostrar");
  }, 2500);
}

// BOTÃO FAVORITAR PRODUTO
const botaoFavoritar = document.getElementById("btn-favoritar");

if (botaoFavoritar) {
  const iconeFavoritar = botaoFavoritar.querySelector("ion-icon");
  const textoFavoritar = document.getElementById("texto-btn-favoritar");

  botaoFavoritar.addEventListener("click", function () {
    // toggle alterna a classe — se tiver remove, se não tiver adiciona
    botaoFavoritar.classList.toggle("favoritado");

    if (botaoFavoritar.classList.contains("favoritado")) {
      iconeFavoritar.setAttribute("name", "heart");
      textoFavoritar.innerText = "Favoritado";
      mostrarAvisoCopia("Produto adicionado aos favoritos!");
    } else {
      iconeFavoritar.setAttribute("name", "heart-outline");
      textoFavoritar.innerText = "Favoritar";
      mostrarAvisoCopia("Produto removido dos favoritos.");
    }
  });
}

// FORMULÁRIO DE CONTATO
const formContato = document.getElementById("form-contato");

if (formContato) {
  const contatoNome = document.getElementById("contato-nome");
  const contatoEmail = document.getElementById("contato-email");
  const contatoTelefone = document.getElementById("contato-telefone");
  const contatoAssunto = document.getElementById("contato-assunto");
  const contatoMensagem = document.getElementById("contato-mensagem");
  const contatoErro = document.getElementById("contato-erro");

  formContato.addEventListener("submit", function (event) {
    event.preventDefault();

    contatoNome.classList.remove("input-erro");
    contatoEmail.classList.remove("input-erro");
    contatoTelefone.classList.remove("input-erro");
    contatoAssunto.classList.remove("input-erro");
    contatoMensagem.classList.remove("input-erro");
    contatoErro.innerText = "";

    if (
      contatoNome.value.trim() === "" ||
      contatoNome.value.trim().length < 3
    ) {
      contatoNome.classList.add("input-erro");
      contatoErro.innerText = "O nome deve ter pelo menos 3 caracteres.";
      return;
    }

    if (contatoEmail.value.trim() === "") {
      contatoEmail.classList.add("input-erro");
      contatoErro.innerText = "Preencha seu e-mail.";
      return;
    }

    if (contatoTelefone.value.trim() === "") {
      contatoTelefone.classList.add("input-erro");
      contatoErro.innerText = "Preencha seu telefone.";
      return;
    }

    if (
      contatoAssunto.value.trim() === "" ||
      contatoAssunto.value.trim().length < 3
    ) {
      contatoAssunto.classList.add("input-erro");
      contatoErro.innerText = "O assunto deve ter pelo menos 3 caracteres.";
      return;
    }

    if (
      contatoMensagem.value.trim() === "" ||
      contatoMensagem.value.trim().length < 3
    ) {
      contatoMensagem.classList.add("input-erro");
      contatoErro.innerText = "A mensagem deve ter pelo menos 3 caracteres.";
      return;
    }

    contatoErro.innerText = "Mensagem enviada! Entraremos em contato em breve.";
    contatoErro.classList.remove("contato-erro");
    contatoErro.classList.add("contato-sucesso");

    formContato.reset();
  });
}

// DARK / LIGHT MODE DA PÁGINA DE CONTATO
document.documentElement.classList.add("light");

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

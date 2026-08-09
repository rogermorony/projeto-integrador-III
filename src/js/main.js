// PÁGINA DE DETALHES DO PRODUTO
const botaoCarrinho = document.querySelector(".detail-btn");
const tituloProduto = document.querySelector(".detail-title");
const precoProduto = document.querySelector(".detail-price");

if (botaoCarrinho && tituloProduto && precoProduto) {
  botaoCarrinho.addEventListener("click", function () {
    const nomeProduto = tituloProduto.innerText;
    const preco = precoProduto.innerText;

    console.log("Produto selecionado: " + nomeProduto);
    console.log("Preço: " + preco);

    alert(nomeProduto + " foi adicionado ao carrinho!");

    botaoCarrinho.classList.add("btn-adicionado");

    const textoBotao = document.querySelector(".btn-text");
    if (textoBotao) {
      textoBotao.innerText = "ADICIONADO AO CARRINHO";
    }
  });
}

// BOTÃO COPIAR LINK DA PÁGINA
const botaoCopiar = document.getElementById("btn-copy");

if (botaoCopiar) {
  botaoCopiar.addEventListener("click", function () {
    const linkPagina = window.location.href;
    alert("Copie o link abaixo:\n" + linkPagina);
  });
}

// BOTÃO COMPARTILHAR NO WHATSAPP
const botaoCompartilhar = document.getElementById("btn-share");

if (botaoCompartilhar) {
  botaoCompartilhar.addEventListener("click", function () {
    const linkPagina = window.location.href;
    const urlWhatsApp = "https://wa.me/?text=" + linkPagina;
    window.open(urlWhatsApp);
  });
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
    } else {
      iconeFavoritar.setAttribute("name", "heart-outline");
      textoFavoritar.innerText = "Favoritar";
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

  contatoTelefone.addEventListener("input", function () {
    let valor = contatoTelefone.value;
    console.log("Telefone digitado: " + valor);
  });

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

    alert("Mensagem enviada! Entraremos em contato em breve.");

    contatoNome.value = "";
    contatoEmail.value = "";
    contatoTelefone.value = "";
    contatoAssunto.value = "";
    contatoMensagem.value = "";
  });
}

// DARK / LIGHT MODE DA PÁGINA DE CONTATO
document.documentElement.classList.add("light");

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}
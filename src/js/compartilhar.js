async function carregarCompartilhamento() {
  const botaoCompartilhar = document.getElementById("btn-share");

  if (!botaoCompartilhar) {
    return;
  }

  try {
    const resposta = await fetch("src/components/compartilhar.html");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar o componente de compartilhamento.");
    }

    const modalHtml = await resposta.text();

    document.body.insertAdjacentHTML("beforeend", modalHtml);

    const modalCompartilhar = document.getElementById("modalCompartilhar");

    botaoCompartilhar.addEventListener("click", function () {
      const linkPagina = window.location.href;
      const tituloProduto = document.querySelector(".detail-title").innerText;
      const mensagem = "Confira este produto da Serra Verde Gramas: ";

      document.getElementById("share-whatsapp").href =
        "https://wa.me/?text=" + encodeURIComponent(mensagem + tituloProduto + " - " + linkPagina);

      document.getElementById("share-facebook").href =
        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(linkPagina);

      document.getElementById("share-email").href =
        "mailto:?subject=" + encodeURIComponent(tituloProduto) +
        "&body=" + encodeURIComponent(mensagem + tituloProduto + " - " + linkPagina);

      bootstrap.Modal.getOrCreateInstance(modalCompartilhar).show();
    });
  } catch (erro) {
    console.error(erro);
  }
}

carregarCompartilhamento();
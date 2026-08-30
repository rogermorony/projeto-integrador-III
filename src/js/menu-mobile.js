async function carregarMenuMobile() {
  const container = document.querySelector("#menu-mobile-container");

  if (!container) {
    return;
  }

  try {
    const resposta = await fetch("src/components/menu-mobile.html");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar o menu mobile.");
    }

    container.innerHTML = await resposta.text();
  } catch (erro) {
    console.error(erro);
  }
}

carregarMenuMobile();
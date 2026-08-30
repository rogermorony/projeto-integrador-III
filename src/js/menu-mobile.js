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

    const botaoMenu = container.querySelector(".navbar-toggler");
    const menuMobile = container.querySelector("#menuMobile");

    if (botaoMenu && menuMobile) {
      menuMobile.addEventListener("shown.bs.collapse", function () {
        botaoMenu.setAttribute("aria-label", "Fechar menu");
      });

      menuMobile.addEventListener("hidden.bs.collapse", function () {
        botaoMenu.setAttribute("aria-label", "Abrir menu");
      });
    }
  } catch (erro) {
    console.error(erro);
  }
}

carregarMenuMobile();

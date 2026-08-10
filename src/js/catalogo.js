const paginasProdutos = {
  1: "detalhes-esmeralda.html",
  2: "detalhes-saocarlos.html",
  3: "detalhes-zeon.html",
  4: "detalhes-terra.html",
  5: "detalhes-terraemsaco.html",
  6: "detalhes-fertilizante.html",
  7: "detalhes-sementes.html",
  8: "detalhes-irrigacao.html",
  9: "detalhes-ferramentas.html",
};

function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function criarCardProduto(produto) {
  const pagina = paginasProdutos[produto.id] || "index.html";

  return `
    <div class="col">
      <article class="card h-100 flex-row flex-md-column">

        <div class="thumb">
          <a href="${pagina}">
            <img
              src="${produto.imagem}"
              alt="${produto.nome}"
            >
          </a>
        </div>

        <div class="card-body d-flex flex-column flex-grow-1">
          <h5 class="title">${produto.nome.toUpperCase()}</h5>

          <p class="subtitle">
            ${produto.descricao}
          </p>

          <p class="price">
            ${formatarPreco(produto.preco)}
          </p>

          <a
            href="${pagina}"
            class="btn-vermais btn btn-success w-100 mt-auto"
          >
            Ver mais
          </a>
        </div>

      </article>
    </div>
  `;
}

function renderizarProdutos(listaProdutos) {
  const catalogo = document.querySelector("#catalogo-produtos");

  catalogo.innerHTML = "";

  const produtosAtivos = listaProdutos.filter(function (produto) {
    return produto.ativo === true;
  });

  if (produtosAtivos.length === 0) {
    catalogo.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning">
          Nenhum produto encontrado.
        </div>
      </div>
    `;

    return;
  }

  produtosAtivos.forEach(function (produto) {
    catalogo.innerHTML += criarCardProduto(produto);
  });
}

const produtos = buscarDados(CHAVES_STORAGE.produtos);

renderizarProdutos(produtos);

const campoBusca = document.querySelector("#busca-produtos");

campoBusca.addEventListener("input", function () {
  const termoBuscado = campoBusca.value.trim().toLowerCase();

  const produtosEncontrados = [];

  produtos.forEach(function (produto) {
    const nome = produto.nome.toLowerCase();
    const descricao = produto.descricao.toLowerCase();

    if (nome.includes(termoBuscado) || descricao.includes(termoBuscado)) {
      produtosEncontrados.push(produto);
    }
  });

  renderizarProdutos(produtosEncontrados);
});

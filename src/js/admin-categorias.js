const formularioCategoria = document.querySelector("#form-categoria");
const campoIdCategoria = document.querySelector("#categoria-id");
const campoNomeCategoria = document.querySelector("#nome-categoria");

const campoDescricaoCategoria = document.querySelector("#descricao-categoria");

const campoCategoriaAtiva = document.querySelector("#categoria-ativa");
const tabelaCategorias = document.querySelector("#tabela-categorias");

const mensagemCategoria = document.querySelector("#mensagem-categoria");

const botaoSalvarCategoria = document.querySelector("#botao-salvar-categoria");

const botaoCancelarEdicao = document.querySelector("#botao-cancelar-edicao");

function mostrarMensagemCategoria(texto, tipo) {
  mensagemCategoria.textContent = texto;
  mensagemCategoria.className = `alert alert-${tipo}`;
}

function calcularProximoId(categorias) {
  let maiorId = 0;

  categorias.forEach(function (categoria) {
    if (categoria.id > maiorId) {
      maiorId = categoria.id;
    }
  });

  return maiorId + 1;
}

function limparFormularioCategoria() {
  formularioCategoria.reset();
  campoIdCategoria.value = "";
  campoCategoriaAtiva.checked = true;

  botaoSalvarCategoria.textContent = "Cadastrar categoria";
  botaoCancelarEdicao.classList.add("d-none");
}

function renderizarCategorias() {
  const categorias = buscarDados(CHAVES_STORAGE.categorias);

  tabelaCategorias.innerHTML = "";

  if (categorias.length === 0) {
    tabelaCategorias.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-secondary">
          Nenhuma categoria cadastrada.
        </td>
      </tr>
    `;

    return;
  }

  categorias.forEach(function (categoria) {
    const situacao = categoria.ativa
      ? '<span class="badge text-bg-success">Ativa</span>'
      : '<span class="badge text-bg-secondary">Inativa</span>';

    tabelaCategorias.innerHTML += `
      <tr>
        <td>${categoria.id}</td>
        <td>${categoria.nome}</td>
        <td>${categoria.descricao}</td>
        <td>${situacao}</td>
        <td>
  <div class="d-flex gap-2">
    <button
      type="button"
      class="btn btn-sm btn-outline-primary"
      onclick="editarCategoria(${categoria.id})"
    >
      Editar
    </button>

    <button
      type="button"
      class="btn btn-sm btn-outline-danger"
      onclick="excluirCategoria(${categoria.id})"
    >
      Excluir
    </button>
  </div>
</td>
        </td>
      </tr>
    `;
  });
}

function editarCategoria(idCategoria) {
  const categorias = buscarDados(CHAVES_STORAGE.categorias);

  const categoriaEncontrada = categorias.find(function (categoria) {
    return categoria.id === idCategoria;
  });

  if (!categoriaEncontrada) {
    return;
  }

  campoIdCategoria.value = categoriaEncontrada.id;
  campoNomeCategoria.value = categoriaEncontrada.nome;
  campoDescricaoCategoria.value = categoriaEncontrada.descricao;
  campoCategoriaAtiva.checked = categoriaEncontrada.ativa;

  botaoSalvarCategoria.textContent = "Salvar alterações";
  botaoCancelarEdicao.classList.remove("d-none");

  campoNomeCategoria.focus();
}

function excluirCategoria(idCategoria) {
  const produtos = buscarDados(CHAVES_STORAGE.produtos);

  const produtoRelacionado = produtos.find(function (produto) {
    return produto.categoriaId === idCategoria;
  });

  if (produtoRelacionado) {
    mostrarMensagemCategoria(
      "Esta categoria possui produtos vinculados e não pode ser excluída.",
      "warning"
    );

    return;
  }

  const confirmarExclusao = confirm(
    "Deseja realmente excluir esta categoria?"
  );

  if (!confirmarExclusao) {
    return;
  }

  const categorias = buscarDados(CHAVES_STORAGE.categorias);

  const indiceCategoria = categorias.findIndex(function (categoria) {
    return categoria.id === idCategoria;
  });

  if (indiceCategoria === -1) {
    mostrarMensagemCategoria(
      "Categoria não encontrada.",
      "danger"
    );

    return;
  }

  categorias.splice(indiceCategoria, 1);

  salvarDados(CHAVES_STORAGE.categorias, categorias);

  if (Number(campoIdCategoria.value) === idCategoria) {
    limparFormularioCategoria();
  }

  mostrarMensagemCategoria(
    "Categoria excluída com sucesso.",
    "success"
  );

  renderizarCategorias();
}

formularioCategoria.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const idCategoria = Number(campoIdCategoria.value);
  const nome = campoNomeCategoria.value.trim();
  const descricao = campoDescricaoCategoria.value.trim();
  const ativa = campoCategoriaAtiva.checked;

  const categorias = buscarDados(CHAVES_STORAGE.categorias);

  const categoriaExistente = categorias.find(function (categoria) {
    return (
      categoria.nome.toLowerCase() === nome.toLowerCase() &&
      categoria.id !== idCategoria
    );
  });

  if (categoriaExistente) {
    mostrarMensagemCategoria(
      "Já existe uma categoria com esse nome.",
      "warning",
    );

    return;
  }

  if (idCategoria > 0) {
    const indiceCategoria = categorias.findIndex(function (categoria) {
      return categoria.id === idCategoria;
    });

    Object.assign(categorias[indiceCategoria], {
      nome: nome,
      descricao: descricao,
      ativa: ativa,
    });

    mostrarMensagemCategoria("Categoria atualizada com sucesso.", "success");
  } else {
    const novaCategoria = {
      id: calcularProximoId(categorias),
      nome: nome,
      descricao: descricao,
      ativa: ativa,
    };

    categorias.push(novaCategoria);

    mostrarMensagemCategoria("Categoria cadastrada com sucesso.", "success");
  }

  salvarDados(CHAVES_STORAGE.categorias, categorias);
  limparFormularioCategoria();
  renderizarCategorias();
});

botaoCancelarEdicao.addEventListener("click", function () {
  limparFormularioCategoria();
});

renderizarCategorias();

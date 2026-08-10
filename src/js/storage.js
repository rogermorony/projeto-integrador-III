const CHAVES_STORAGE = {
  categorias: "categorias",
  produtos: "produtos",
  mensagens: "mensagens"
};

function salvarDados(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function buscarDados(chave) {
  const dadosSalvos = localStorage.getItem(chave);

  if (dadosSalvos === null) {
    return [];
  }

  return JSON.parse(dadosSalvos);
}

function inicializarStorage() {
  if (localStorage.getItem(CHAVES_STORAGE.categorias) === null) {
    salvarDados(CHAVES_STORAGE.categorias, categoriasIniciais);
  }

  if (localStorage.getItem(CHAVES_STORAGE.produtos) === null) {
    salvarDados(CHAVES_STORAGE.produtos, produtosIniciais);
  }

  if (localStorage.getItem(CHAVES_STORAGE.mensagens) === null) {
    salvarDados(CHAVES_STORAGE.mensagens, mensagensIniciais);
  }
}

inicializarStorage();
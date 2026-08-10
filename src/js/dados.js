const categoriasIniciais = [
  {
    id: 1,
    nome: "Gramas",
    descricao: "Gramas para diferentes tipos de jardins",
    ativa: true
  },
  {
    id: 2,
    nome: "Terra e Adubo",
    descricao: "Produtos para preparação e manutenção do solo",
    ativa: true
  },
  {
    id: 3,
    nome: "Acessórios",
    descricao: "Ferramentas e acessórios para jardinagem",
    ativa: true
  }
];

const produtosIniciais = [
  {
    id: 1,
    categoriaId: 1,
    nome: "Grama Esmeralda",
    descricao: "Alta resistência a pisoteios",
    preco: 17,
    imagem: "src/assets/esmeralda.png",
    destaque: true,
    ativo: true
  },
  {
    id: 2,
    categoriaId: 1,
    nome: "Grama São Carlos",
    descricao: "Boa para meia-sombra",
    preco: 16,
    imagem: "src/assets/sao carlos.jpg",
    destaque: true,
    ativo: true
  },
  {
    id: 3,
    categoriaId: 1,
    nome: "Grama Zeon",
    descricao: "Ideal para jardins premium",
    preco: 18,
    imagem: "src/assets/zeon.png",
    destaque: true,
    ativo: true
  },
  {
    id: 4,
    categoriaId: 2,
    nome: "Terra Preta",
    descricao: "Ideal para plantio de gramados",
    preco: 120,
    imagem: "src/assets/terra preta.jpg",
    destaque: false,
    ativo: true
  },
  {
    id: 5,
    categoriaId: 2,
    nome: "Terra Preta em Saco",
    descricao: "Ideal para cobertura de gramados",
    preco: 30,
    imagem: "src/assets/terra preta em saco.jpg",
    destaque: false,
    ativo: true
  },
  {
    id: 6,
    categoriaId: 2,
    nome: "Fertilizante NPK",
    descricao: "Auxilia no crescimento vigoroso",
    preco: 17,
    imagem: "src/assets/npk.jpg",
    destaque: false,
    ativo: true
  },
  {
    id: 7,
    categoriaId: 1,
    nome: "Sementes de Grama",
    descricao: "Mix de sementes para falhas",
    preco: 58,
    imagem: "src/assets/sementes de grama.webp",
    destaque: false,
    ativo: true
  },
  {
    id: 8,
    categoriaId: 3,
    nome: "Kit Irrigação",
    descricao: "Ideal para áreas de até 50 m²",
    preco: 35,
    imagem: "src/assets/kit irrigacao.jpg",
    destaque: false,
    ativo: true
  },
  {
    id: 9,
    categoriaId: 3,
    nome: "Kit Ferramentas de Jardinagem",
    descricao: "Ferramentas para manutenção do jardim",
    preco: 215,
    imagem: "src/assets/kit ferramentas de jardinagem.webp",
    destaque: false,
    ativo: true
  }
];

const mensagensIniciais = [];
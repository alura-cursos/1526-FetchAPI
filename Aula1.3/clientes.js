const infoClientes = [
  {
    cpf: 18875539081,
    nome: "Patricia"
  },
  {
    cpf: 18875539081,
    nome: "Elena"
  },
  {
    cpf: 18875539081,
    nome: "Ronaldo"
  }
];

const exibeCliente = (cpf, nome) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

infoClientes.forEach(info => {
  corpoTabela.appendChild(exibeCliente(info.cpf, info.nome))
})



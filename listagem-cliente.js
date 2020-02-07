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

listarClientes().then(exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
  });
});

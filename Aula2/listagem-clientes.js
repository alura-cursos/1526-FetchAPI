document.body.onload = () => {
    const exibeCliente = (cpf, nome) => {
      const linha = document.createElement("tr");
  
      const conteudoLinha =`
      <td>${cpf}</td>
      <td>${nome}</td>
  `;

      linha.innerHTML = conteudoLinha;
  
      return linha;
    };
  
    const corpoTabela = document.querySelector("[data-conteudo-tabela]");
  
    listarClientes().then(clientes => {
      clientes.forEach(info => {
        corpoTabela.appendChild(exibeCliente(info.cpf, info.nome));
      });
    });
  };
  
  
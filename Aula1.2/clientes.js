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
  
  const conteudoTabela = `
  <tr>
      <td>${infoClientes[0].cpf}</td>
      <td>${infoClientes[0].nome}</td>
      </tr>
   
      <tr>
      <td>${infoClientes[1].cpf}</td>
      <td>${infoClientes[1].nome}</td>
  </tr>
  
  <tr>
  <td>${infoClientes[2].cpf}</td>
  <td>${infoClientes[2].nome}</td>
  </tr>
  `;
  
  const corpoTabela = document.querySelector("[data-conteudo-tabela]");
  corpoTabela.innerHTML = conteudoTabela;
  
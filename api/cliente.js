listarClientes = () => {
    return fetch("http://localhost:4000/clientes", {
      method: "get"
    })
      .then(resposta => {
        return resposta.json();
      })
      .then(json => {
        return json;
      });
  };
  
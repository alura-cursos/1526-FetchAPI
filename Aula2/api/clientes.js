const listarClientes = () => {
    return fetch("http:localhost:4000/clientes", {
      method: "get"
    })
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        return json;
      });
  };
  
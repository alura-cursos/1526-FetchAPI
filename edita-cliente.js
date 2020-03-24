const pegaURL = new URL(window.location)
console.log( pegaURL)
const id = pegaURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then(dados => {
    inputCPF.value = dados[0].cpf
    inputNome.value = dados[0].nome
})

const formEdicao = document.querySelector('[data-form]')

formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    if(!validaCPF(inputCPF.value)){
        alert("ESSE CPF NÃO EXISTE")
        return
    }

    if(inputCPF.value.length !== 11){
        alert("ESSE CPF NÃO EXISTE")
        return 
    }
    editaCliente(id, inputCPF.value, inputNome.value)
})

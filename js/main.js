const form = document.getElementById("novoCadastro")
const lista = document.getElementById("lista")
const inputNome = document.getElementById("nome")
const inputQuantidade = document.getElementById("quantidade")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    criaElemento(inputNome.value, inputQuantidade.value)
})

function criaElemento(item, quantidade) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const novaQuantidade = document.createElement("strong")
    novaQuantidade.textContent = quantidade
    novoItem.appendChild(novaQuantidade)
    
    novoItem.innerHTML += item

    lista.appendChild(novoItem)

    inputNome.value = ""
    inputQuantidade.value = ""
}
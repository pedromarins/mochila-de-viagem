const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
 
    const item = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;

    console.log(item, quantidade)
})

// forma simples - console.log(evento.target[0].value)
// forma dinâmica - console.log(evento.target.elements['nome'].value)
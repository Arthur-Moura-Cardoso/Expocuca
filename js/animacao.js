const linhas = document.querySelectorAll("hr")
const icone = document.querySelectorAll(".icons")
const titulos = document.querySelectorAll(".titulo-text")
const info = document.querySelector(".infoBotao")

const myObserver = new IntersectionObserver ((event) => {
    event.forEach((entry) => {
        
        if(entry.isIntersecting &&
            entry.target.classList == "linha") {
                entry.target.style.width = "90%"
            }
        
        if(entry.isIntersecting &&
            entry.target.classList != "linha" &&
            entry.target.classList != "icons") {
            entry.target.classList.add('escrita')
        }

        if(entry.isIntersecting &&
            entry.target.classList == "icons" &&
            entry.target.trigger === "") {
                entry.target.trigger = "in"
        }
    })
}, {
    threshold: 1
})

linhas.forEach(hr => {
    myObserver.observe(hr)
})

icone.forEach(icon => {
    myObserver.observe(icon)
})

titulos.forEach(titulo => {
    myObserver.observe(titulo)
})

function abrir() {
    info.classList.toggle("ativo")
}
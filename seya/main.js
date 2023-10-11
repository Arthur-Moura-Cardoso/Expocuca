
const myObserver = new IntersectionObserver ((event) => {
    event.forEach((entry) => { 
        if(entry.isIntersecting){
            entry.target.classList.add("ativo")
            console.log(`ativo ${event}`)
        }else {
            entry.target.classList.remove("ativo")
        }
    })
})

const elements = document.querySelectorAll(".secao")

elements.forEach((elemento) => myObserver.observe(elemento))

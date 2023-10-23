const info_etec = document.querySelectorAll('.number')
const secao_dados = document.querySelector('.sobre_nos')
var numero_atual = []
var numero_alvo = []

for(var i = 0; i < info_etec.length; i++){
    numero_atual[i] = info_etec[i].dataset.from
    numero_alvo[i] = info_etec[i].dataset.to
    info_etec[i].innerHTML = numero_atual[i]
}

function adicionarNumero() {
    for(var j = 0; j < info_etec.length; j++){
        
        if(parseInt(numero_atual[j]) > parseInt(numero_alvo[j])){
            
        }else {
            info_etec[j].innerHTML = numero_atual[j]
        }
        
        
        if(numero_alvo[j] > 100){
            numero_atual[j] = parseInt(numero_atual[j]) + 40
        }else {
            numero_atual[j]++
        }   
    }
}

const myObserver = new IntersectionObserver ((event) => {
    event.forEach((entry) => { 
        if(entry.isIntersecting){
            setInterval(() => {
                adicionarNumero()
            }, 100)
        }
    })
}, {
    threshold: 0.9
})

myObserver.observe(secao_dados)
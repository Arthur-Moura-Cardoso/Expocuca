const info_etec = document.querySelectorAll('.number')
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
            numero_atual[j] = parseInt(numero_atual[j]) + 10
        }else {
            numero_atual[j]++
        }   
    }
}

setInterval(() => {
    adicionarNumero()
}, 100)
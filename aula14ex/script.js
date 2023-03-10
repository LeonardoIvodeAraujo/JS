    
    
    
function contar(){
    
    
    var i = window.document.getElementById('txti')
    var final = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var result = window.document.getElementById('res')
    if(i.value.length == 0 || final.value.length ==0 || pas.value.length == 0){
        window.alert('[ERRO] Faltem dados!')
        
    }else {
        result.innerHTML = 'Contando: '
        var ini = Number(i.value)
        var f = Number(final.value)
        var p = Number(pas.value)
        // contagem crescente
         if(ini<f){
            for(var c = ini; c <= f; c += p) {
            result.innerHTML += `${c} \u{1F449}`}

        } else {
            //contagem regrassiva
            for(var c = ini; c >= f; c -= p) {
                result.innerHTML += `${c} \u{1F449}`

        }
        

         }

        
    }
}


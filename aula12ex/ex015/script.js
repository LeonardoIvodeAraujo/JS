function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
       
        if (fsex[0].checked){
            genero = 'Homem'
        if(idade >=0 && idade <10) {
            //criança
        img.setAttribute('src', 'bebe-m.png')
        } else if(idade <21){
            //jovem
            img.setAttribute('src', 'jovem-homem.png')
        } else if(idade <50){
            //adulto
            img.setAttribute('src', 'homem.png')
        } else{
            //idoso
            img.setAttribute('src', 'homem-velho.png')
        }
        } else if (fsex[1].checked){genero = 'Mulher'
        if(idade >=0 && idade <10) {
            //criança
            img.setAttribute('src', 'bebe-f.png')
        } else if(idade <21){
            //jovem
            img.setAttribute('src', 'jovem-mulher.png')
        } else if(idade <50){
            //adulto
            img.setAttribute('src', 'mulher.png')
        } else {
            //idoso
            img.setAttribute('src', 'mulher-velha.png')
        }


        }
       
        
        res.innerHTML= `Detectamos o genero ${genero}, com 
        ${idade} anos de idade.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
    
}
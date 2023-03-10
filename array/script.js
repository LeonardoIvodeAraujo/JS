
let num= document.querySelector('input#fnum')
let lista= document.querySelector('select#flista')
let res= document.querySelector('div#res')
let valores = []

function isNumero (n){ 
    if (Number(n)>=1 && Number(n)<=100){ // a conversao feita por Number em (n) tem que ser maior ou igual a 1 e menor ou igual a 100 .(Number( é a conversao de string para numero))

        return true
    }else {
        return false}
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ //indexOf() busca valores no índice,nesse caso esse if serve pesquisar um numuro na lista que nao foi adicionado
        return true
    }else{
        false
    }
}

function adicionar (){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //sera adicionado se for um numero e nao estiver na lista
        valores.push(Number(num.value))  //push esta adicionando valores do Number(num.value) a array valores
        let item=document.createElement('option')//criando elemento option para aparecer no select
        item.text=(`Valor ${num.value} adicionado`)
        lista.appendChild(item) //mostrar na tela com appendChild no select
        res.innerHTML= ''
    }else {
        window.alert('valor ínvalido ou ja adiconado na lista.') // se nao aparecera esta mensagem
    }
    num.value=''//apaga a caixa de texto apos adicionar um numero
    num.focus()//apos adicionar um numero a caixa de texto se seleciona possibilitando escrever rapidamente um numero noamente sem precisar clicar na caixa 

}

function finalizar(){
    if(valores.length == 0){ window.alert('Adicione valores antes de finalizar!') // sera contado o cumprimento de valores(quantos indices chaves tem) e so valor retornar 0,sera exibida alert

    }else{
        let tot= valores.length //variavel criada para contar o cumprimento de valores[] 
        let maior= valores[0]
        let menor= valores[0]
        let soma= 0
        let media= 0
        for(let pos in valores){ // var pos em valores/neste caso queremos os indices
            soma += valores[pos] // soma mais recebe valores
            if(valores[pos]> maior)
            maior = valores[pos]
            if(valores[pos]< menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML= ''
        res.innerHTML += `<p>Ao todo,temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} .</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} .</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma} .</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media} .</p>`
    }
}
var agora= new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora>=0 && hora <5){
    console.log('Como vai a madrugada?!')}
else if( hora<12){
    console.log('Bom dia!')
}else if(hora<18){
console.log('Boa tarde!')
}else if( hora<=24){
    console.log('Boa noite!')
}

 
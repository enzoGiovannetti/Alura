
//paramentros

function soma(num1,num2) {
  return num1 + num2
}

//console.log(soma(5,8))


//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome,idade){
  return 'meu nome é ' + nome +' e minha idade é ' + idade
}

//console.log(nomeIdade(20,'enzo'))


function multiplica(num1 = 1 ,num2 = 1){
  return num1 * num2
}

console.log(multiplica(soma(204,-200),soma(7,10)))

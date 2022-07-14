function exercicioUm(){
  const numeroUm = parseInt(prompt("Digite o primeiro número"));
  const numeroDois = parseInt(prompt("Digite o segundo número"));
  alert(`o resto da divisão de ${numeroUm} por ${numeroDois} é: ${(numeroUm % numeroDois)}, o número ${numeroUm} elevado a ${numeroDois} é: ${(numeroUm ** numeroDois)}`);
}

function exercicioDois(){
  const numeroUm = parseInt(prompt("Digite o primeiro número"));
  const numeroDois = parseInt(prompt("Digite o segundo número"));
  alert(`a subtração é: ${(numeroUm - numeroDois)}, a soma é: ${(numeroUm + numeroDois)}, a multiplicação é: ${(numeroUm * numeroDois)}, a divisão é: ${(numeroUm / numeroDois)}`);
}

function exercicioTres(){
  const playerUm = parseInt(prompt("Digite um número - Player 1"));
  const playerDois = parseInt(prompt("Digite um número - Player 2"));
  const sorteio = parseInt(Math.random() * 2);

  if(playerUm === playerDois){
    alert("Empate");
  }else{
    if(sorteio === 0){
      if(playerUm < playerDois){
        alert("Player 1 teve o menor número");
      }else{
        alert("Player 2 teve o menor número");
      }
    }else{
      if(playerUm > playerDois){
        alert("Player 1 teve o maior número");
      }else{
        alert("Player 2 teve o maior número");
      }
    }
  }
}

/* EXERCICIO 04 - RETIRAR COMENTARIOS NOS CÓDIGOS ABAIXO */

// let numero = parseFloat(prompt("Digite um número"));
// const output = document.querySelector("#output");
// output.innerHTML = numero;

function calcular(simbolo){
  switch(simbolo){
    case '+':
      let numeroSoma = parseFloat(prompt("Digite um número"));
      output.innerHTML = (numero += numeroSoma);
    break;
    case '-':
      let numeroSub = parseFloat(prompt("Digite um número"));
      output.innerHTML = (numero -= numeroSub);
    break;
    case '*':
      let numeroMult = parseFloat(prompt("Digite um número"));
      output.innerHTML = (numero *= numeroMult);
    break;
    case '/':
      let numeroDiv = parseFloat(prompt("Digite um número"));
      output.innerHTML = (numero /= numeroDiv);
    break;
  }
}

function exercicioCinco(){
  const altura = parseInt(prompt("Digite a altura"));
  const largura = parseInt(prompt("Digite a largura"));
  const outputArea = document.querySelector("#outputArea");

  if(isNaN(altura) || isNaN(largura)){
    throw new Error(outputArea.innerHTML = "Digite um número");
  }else{
    outputArea.innerHTML = `A área total é: ${(altura * largura)}`;
  }
}

function exercicioSeis(){
  const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira",  "Sexta-Feira", "Sábado"];
  const dataUsuario = new Date().getDay();
  for(let i = 0; i < diasSemana.length; i++){
    if(i === dataUsuario){
      alert(`Hoje é ${diasSemana[i]}`);
      break;
    }
  }
}

function exercicioSete(){
  const numeros = [25, 30, 45, 28, 0, 12, 78, 64];
  let somaPar = 0;
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
      (somaPar += numeros[i]);
    }
  }
  alert(somaPar);
}

const caneta = {
  preco: 2.50,
  estoque: 10,
  comprar: function(quantidade){
    if(!quantidade){
      quantidade = 1;
    }
    console.log("Compra efetuada");
    this.estoque -= quantidade;
    console.log(this.estoque);
  }
}

function vetor(){
  let teste = ["Goiás", "Rio de Janeiro", "Amazonas", "Paraná"]
  console.log(teste)
  teste.splice(1,0, "Distrito Federal")
  console.log(teste)

  for(let i in teste){ // percorre e retorna o indice
    console.log(i)
  }

  for(let escreva of teste){ // percorre e retorna o valor
    console.log(escreva)
  }
}

class Veiculo{
  constructor(modelo, marca, cor, ano){
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.ano = ano
  }
}

let carroUm = new Veiculo("X6", "BMW", "Branca", 2021)
let carroDois = new Veiculo("911", "Porsche", "Azul", 2019)
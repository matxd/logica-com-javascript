function inicio(){
  let numero = parseFloat(prompt("Digite um número"));
  const output = document.querySelector("#output");
  output.innerHTML = numero;
}

function soma(){
  let numeroSoma = parseFloat(prompt("Digite um número"));
  output.innerHTML = (numero += numeroSoma);
}

function subtracao(){
  let numeroSubtracao = parseFloat(prompt("Digite um número"));
  output.innerHTML = (numero -= numeroSubtracao);
}

function multiplicacao(){
  let numeroMultiplicacao = parseFloat(prompt("Digite um número"));
  output.innerHTML = (numero *= numeroMultiplicacao);
}

function divisao(){
  let numeroDivisao = parseFloat(prompt("Digite um número"));
  output.innerHTML = (numero /= numeroDivisao);
}
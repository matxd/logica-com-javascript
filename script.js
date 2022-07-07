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
  }else {
    if(sorteio === 0){
      if(playerUm < playerDois){
        alert("Player 1 teve o menor número");
      }else {
        alert("Player 2 teve o menor número");
      }
    }else {
      if(playerUm > playerDois){
        alert("Player 1 teve o maior número");
      }else {
        alert("Player 2 teve o maior número");
      }
    }
  }
}
function calcular() {
  var salario = document.getElementById("nome").value
  var filho = Number(document.getElementById("filho").value)
  var salario = Number(document.getElementById("salario").value)
  let familia = null

  if (salario <= 806.80) {
    familia = 41.37 * filho
  }
  else if (salario >= 806.81 && salario <= 1212.64) {
    familia = 29.16 * filho
  }
  else {
    familia = 0
  }
  alert(`${nome}, O salário família é de R$ ${familia}`)

}







/*// Obtém os valores de entrada do usuário
let nome = document.getElementById("nome").value;
let salario = parseFloat(document.getElementById("salario").value);
let filhos = parseInt(document.getElementById("filho").value);

// Define as faixas salariais e as cotas por filho
let faixa1 = 806.80;
let faixa2 = 1212.64;
let cota1 = 41.37;
let cota2 = 29.16;

// Calcula a contribuição do salário e cota do salário família
let contribuicao = 0;
let cotaSalarioFamilia = 0;
if (salario <= faixa1) {
  contribuicao = salario * 0.08;
  cotaSalarioFamilia = cota1 * filhos;
} else if (salario > faixa1 && salario <= faixa2) {
  contribuicao = (faixa1 * 0.08) + ((salario - faixa1) * 0.09);
  cotaSalarioFamilia = cota1 * filhos;
} else {
  contribuicao = (faixa1 * 0.08) + ((faixa2 - faixa1) * 0.09) + ((salario - faixa2) * 0.11);
  cotaSalarioFamilia = cota2 * filhos;
}

// Exibe os resultados para o usuário
document.getElementById("resultado-contribuicao").textContent = "A contribuição do salário de " + nome + " é de R$ " + contribuicao.toFixed(2);
document.getElementById("resultado-cota-salario-familia").textContent = "A cota do salário família de " + nome + " é de R$ " + cotaSalarioFamilia.toFixed(2);*/

/*let mes = prompt("Escolha um mês (1-12): ");
let diasDoMes;

switch (mes) {
  case "1": // Janeiro
  case "3": // Março
  case "5": // Maio
  case "7": // Julho
  case "8": // Agosto
  case "10": // Outubro
  case "12": // Dezembro
    diasDoMes = 31;
    break;
  case "2": // Fevereiro
    diasDoMes = 28; // ou 29 em anos bissextos
    break;
  case "4": // Abril
  case "6": // Junho
  case "9": // Setembro
  case "11": // Novembro
    diasDoMes = 30;
    break;
  default:
    console.log("Mês inválido!");
    break;
}

if (diasDoMes) {
  console.log(`O mês escolhido tem ${diasDoMes} dias.`);
}*/

let saldo = 1000
let valorDeposito
let valorSaque
let opcao = Number(prompt("Qual sua opção?\n saldo (1)\n Depósito (2)\n Saque(3)\n"))


switch (opcao) {

    case 1: 
    alert(`Seu Saldo é de ${saldo} reais.`)
    break;

    case 2: "Deposito"
    let valorDeposito = Number(prompt("Qual o valor do seu deposito?"))
    saldo += valorDeposito
    alert(`Seu novo Saldo é de ${saldo} reais.`)
    break;

    case 3:
        
    let valorSaque = Number(prompt("Qual o valor do seu saque?"))
    saldo -= valorSaque
    
   
    alert(`Seu novo Saldo é de ${saldo} reais.`)
    if (valorSaque > saldo) {
        alert("Você não tem dinheiro suficiente para realizar esse saque!")
        
    }

    
    break

    default: 
     alert("Selecione uma opçâo valida!")
    
}

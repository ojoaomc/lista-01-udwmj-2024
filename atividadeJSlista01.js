const readline = require('readline');

// Cria uma interface para ler os dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário o primeiro número
rl.question("Digite o primeiro número: ", (num1) => {
  // Solicita ao usuário o segundo número
  rl.question("Digite o segundo número: ", (num2) => {
    // Converte as entradas para números e calcula a soma
    const soma = parseFloat(num1) + parseFloat(num2);
    
    console.log(`A soma dos numeros é ${soma}`);
    
    // Fecha a interface
    rl.close();
  });
});

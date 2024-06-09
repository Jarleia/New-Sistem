// Função que mostra na tela a mensagem "Olá, Mundo!!!"
function sayHello() {
    alert("Olá, Mundo!!!");
}

// Função que converte um valor em reais para dólares
function realToDollar(valorEmReais) {
    const taxaDeCambio = 5; // 1 dólar = 5 reais
    const valorEmDolares = valorEmReais / taxaDeCambio;
    return valorEmDolares;
}

// Função para realizar a conversão de real para dólar e mostrar o resultado na tela
function converterParaDolar() {
    const valorEmReais = parseFloat(prompt("Digite o valor em reais:"));
    if (!isNaN(valorEmReais)) {
        const valorEmDolares = realToDollar(valorEmReais);
        alert(`${valorEmReais} reais equivalem a ${valorEmDolares} dólares.`);
    } else {
        alert("Valor inválido. Por favor, digite um número válido.");
    }
}

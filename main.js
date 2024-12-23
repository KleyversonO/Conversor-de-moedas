// Valor das moedas e diferenciação entre elas
const exchangeRates = {
    USD: { EUR: 0.92, BRL: 5.64, GBP: 0.77, JPY: 149.84, CAD: 1.38, AUD: 1.49, USD: 1 },
    EUR: { USD: 1.09, BRL: 6.13, GBP: 0.83, JPY: 162.64, CAD: 1.50, AUD: 1.62, EUR: 1 },
    BRL: { USD: 0.18, EUR: 0.16, GBP: 0.14, JPY: 26.49, CAD: 0.24, AUD: 0.26, BRL: 1 },
    GBP: { USD: 0.77, EUR: 0.83, BRL: 7.37, JPY: 195.52, CAD: 1.80, AUD: 1.94, GBP: 1 },
    JPY: { USD: 0.0067, EUR: 0.0061, BRL: 0.038, GBP: 0.0061, CAD: 0.0092, AUD: 0.0099, JPY: 1 },
    CAD: { USD: 0.72, EUR: 0.67, BRL: 4.09, GBP: 0.56, JPY: 108.64, AUD: 1.08, CAD: 1 },
    AUD: { USD: 0.67, EUR: 0.62, BRL: 3.79, GBP: 0.51, JPY: 100.62, CAD: 0.93, AUD: 1 }
};
// Essa área é reponsavél por fazer a troca de valores e conversão de um valor para outro 
document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();
    //Pega o valor dos campos de entrada
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    // Obtém a taxa de câmbio correspondente
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    // Realiza a conversão
    const convertedAmount = (amount * conversionRate).toFixed(2);
    // Exibe o resultado na caixa de resultado
    document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        
    // Validate the input amount
    if (amount <= 0) {
        alert("Por favor, coloque um valor válido.");
        return;
    }
});

// Essa sesão é responsável por fazer a limpeza do valor quando se clica no botão "Limpar"
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('from-currency').selectedIndex = 0;
    document.getElementById('to-currency').selectedIndex = 0;
    document.getElementById('result').textContent = '';
});
// Adiciona um ouvinte de eventos para o botão de troca de moedas
document.getElementById('swap-currencies').addEventListener('click', function() {
    // Obtém os valores selecionados das moedas
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');   

 
    // Troca os valores selecionados
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
});

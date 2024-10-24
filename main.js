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
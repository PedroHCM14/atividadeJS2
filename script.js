// Calculadora de ICMS - RJ

function entradaValor() {
    valor = parseInt(prompt("Informe o preço de custo do produto: "));
}

function icms() {
    icmsValor = valor * 0.18;
}

function valorFinal() {
    valor2 = valor + icmsValor;
    alert("Preço de custo: " + valor + " reais. Valor do ICMS: " + icmsValor + " reais. Valor final do produto: " + valor2 + " reias.");
}

entradaValor();
icms();
valorFinal();
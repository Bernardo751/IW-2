let valor = parseInt(prompt("Digite o valor para saque:"));

let cedulas = [100, 50, 20, 10, 5, 2, 1];

for (let i = 0; i < cedulas.length; i++) {
    let qtd = Math.floor(valor / cedulas[i]);
    
    if (qtd > 0) {
        alert(qtd + " cédula(s) de R$" + cedulas[i]);
        valor = valor % cedulas[i];
    }
}
const nome = 'Gabriel';
let altura = 172;
let peso = 45;

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100

let imc = peso / Math.pow(altura, 2);
let classificacao = '';
if (imc < 16) {
    classificacao = 'Baixo peso grave';
} else if(imc >= 16 && imc <= 18.49) {
    classificacao = 'Baixo Peso';
} else if(imc >= 18.50 && imc <= 24.99) {
    classificacao = 'Peso Normal';
} else if(imc >=25 && imc <= 29.99) {
    classificacao = 'Sobre Peso';
}else if(imc >= 35 && imc <= 39.99){
    classificacao = 'Obesidade grau II';
} else {
    classificacao = 'Obesidade grau III';
}

console.log(`${nome} peso: ${peso}  altura: ${altura} e classificação: ${classificacao}`);

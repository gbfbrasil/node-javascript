class Funcionario{
    constructor(salarioBase) {
        this.salario = salarioBase;
        this.total = 0;
    }

    calcularSalario(){
        this.total = this.salario + 300;
    }

    exibirSalario(){
        console.log(`Salário Base: ${this.total}`);
    }
}
module.exports = Funcionario;

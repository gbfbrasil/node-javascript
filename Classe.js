class Pessoa {
    constructor(cpf, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.idade}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(`${this.nome} é MASCULINO`);
        } else {

            console.log(` ${this.nome} é FEMININO`);
        }
    }

    maiorIdade() {
        if (this.idade >= 14) {
            return true;
        } else {
            return false;
        }
    }
}

const gabriel = new Pessoa('444.444.444-05', 'Gabriel', 24, 'M');
gabriel.compararSexo();
if (gabriel.maiorIdade()) {
    console.log('${gabriel.nome')
} else {
    console.log(`${gabriel.nome} È MAIOR DE IDADE!`);
}


class Pessoa {
    constructor(cpf, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.idade}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    // Metodo não estático
    // Com retorno void
    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(`${this.nome} é MASCULINO`);
        } else {

            console.log(` ${this.nome} é FEMININO`);
        }
    }

    // Metodo não estático
    // Com retorno 
    maiorIdade() {
        if (this.idade >= 14) {
            return true;
        } else {
            return false;
        }
    }

    //metodo estático -> static
    //com retorno void
    static exemplo(sexo) {
        // MASCULINO
        // FEMININO
        console.log(sexo)
        if (sexo == 'M') {
            console.log('MASCULINO');
        } else {
            console.log('FEMININO');
        }
        console.log('Este é um métado estático.')
    }

    // metodo estático -> static
    // com retorno booleano
    static verificaNome(nome) {
        if (nome.toUpperCase() == nome) {
            return true;
        } else {
            return false;
        }
    }
}


// Estou instanciando um novo objeto(classe)

const gabriel = new Pessoa('444.444.444-05', 'Gabriel', 14, 'M');

// Estou acessando um metodo não estático
// Que o retorno void
gabriel.compararSexo();

// Este é um metodo estático
//Não precisa instanciar
// Verifica se nome é maisculo 
Pessoa.exemplo(gabriel.sexo);
if (!Pessoa.verificaNome(gabriel.nome)) {
    gabriel.nome = gabriel.nome.toUpperCase();
}
if (gabriel.maiorIdade()) {
    console.log(`${gabriel.nome} É MAIOR DE IDADE!`);
} else {
    console.log(`${gabriel.nome} È MENOR DE IDADE!`);
}

console.info(Pessoa);

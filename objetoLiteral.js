// Objeto literal
const Pessoa = {
    nome: 'Gabriel',
    idade: 14,
    cpf: '44433322245',
    sexo: 'M',
    compararSexo: function() {
        if(this.sexo.toUpperCase() == 'M' ){
            console.log(`${this.nome} é MASCULINO`);
        } else {
            console.log(`${this.nome} é FEMININO`);
        } 
    } 
}

Pessoa.compararSexo();
// Desestruturação do Objeto Literal
const {sexo, cpf, ...resto1} = Pessoa;

console.log(sexo);
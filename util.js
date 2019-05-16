// util com string

const nome = 'Gabriel Bim Fernandes da Silva';

//split serve para separar conforme parametro.
console.log(nome.split(' '))

//replace servar para substituir o que for passado como parametro. 
console.log('usando Replace: ' + nome.replace('Gabriel', 'Raphael'))

//utilizando REGEX
console.log('usando replace: ' + nome.replace(new RegExp(' ','g'), '_')) 

// Utilizndo REPEAT
const texto = 'abc';
console.log('Utilizando REPEAT: '+ texto.repeat(3));

// Utilizndo substr para pegar parte do texto
// o metodo retorna uma parte da string iniciando no 
// indice especificado e estendendo um deterinado número
// de caracteres
console.log('Utilizando Substr:' + nome.substr(8,10));

//Slice extrai uma seção de uma string e retorna como uma nova
console.log('Utilizando o slice: ' + nome.slice(8,10));

//StartsWith termina com a determinada palavra
// retorna boolean
console.log('Utilizando StartsWith:' + nome.startsWith('Gabriel'));

//EndsWith termina com a determinada palavra
// retorna boolean
console.log('Utilizando EndsWith:' + nome.endsWith ('Bim'));

// Length determina o tamanho da nossa string
console.log('Utilizando Length: ' + nome.length)


//Number

const numeroDecimal = 3.54333415;

//toPrecision conta apartir do primeiro número
// e faz o arredondamento 
console.log('Utilizando toPrecision: '+ numeroDecimal.toPrecision(3))

//toFixed limita depois do ponto (casas decimal) a quantidade de casas decimais
console.log('Utilizando toFixed:'+ numeroDecimal.toFixed(2))

//isNaN
// retorna um booleano (false quando é numero)
console.log('Utilizando isNaN: '+ isNaN(12))

// Data no javascript

let date = new Date();
console.log('data completa:' +date);
console.log('data: ' + date.getDate());
console.log('Mes: ' +date.getMonth());
console.log('Horas ' +date.getHours());
console.log('Ano: ' +date.getFullYear());
console.log('Dia da Semana: ' +date.getDay());
console.log('Segundos: ' +date.getSeconds());
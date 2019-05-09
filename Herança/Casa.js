class Casa {
    constructor(cor, qtdQuartos) {
        this.cor = cor;
        this.quarto = qtdQuartos;
    }

    getInformacao() {
        console.log(`cor: ${this.cor} Qtd. Quartos: ${this.quarto}`)
    }

    static abrirPortao() {
        console.log('Portão aberto');
    }

    abrirJanela() 
    {  
        
        return 'Abriu Janela'
    }
}
module.exports = Casa;        
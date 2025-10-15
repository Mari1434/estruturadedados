/**
 * criaremos nossa própria classe para 
 * representar uma fila de elementos
 **/ 
class Fila {  // início da classe

    // primeiramente criando o método construtor
    constructor() {
        // propriedade count para controlar o tamanho da fila
        this.count = 0;
        // como removeremos da frente da fila, a propriedade
        // lowestCount  para manter o controle (índice)
        // do primeiro elemento
        this.lowestCount = 0;
        // usaremos um objeto para armazenar os elementos 
        // da fila
        this.items = {};
    }

    // método para incluir elemento no final da fila
    enfileirar(elemento) {
        this.items[this.count] = elemento;
        this.count++; // incrementando para o próximo
    }

    // devolve o tamanho da fila (qtde elementos)
    size() {
        return this.count - this.lowestCount;
    }

    // verifica se a fila está vazia
    filaEstaVazia() {
        return this.size() === 0;
    }

    // método para remover o elemento da frente da fila
    // simularemos o atendimento de quem está na frente
    desinfileirar() {
        // verifica se a fila está vazia
        if (this.filaEstaVazia()) {
            return undefined;
        }
        // armazenando o valor da frente da fila
        const result = this.items[this.lowestCount];
        //removendo o elemento da frente (atendimento do cliente)
        delete this.items[this.lowestCount];
        // será necessário incrementar a propriedade lowestCount
        this.lowestCount++;
        // devolvendo o elemento que foi retirado da fila
        return result;
    }

    /**
     *  este método devolverá o item(elemento) que está
     *  na frente da fila usando lowestCount como índice 
     *  (endereço chave) para obter o valor do elemento
     **/ 
    retornaElementoFrenteFila() {
        // verificando novamente se a fila está vazia
        if (this.filaEstaVazia()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // limpa a fila
    limpaFila() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // imprime todos os elementos da fila
    imprimeFila() { 
        // se estiver vazia, devolve um espaço em branco
        if (this.filaEstaVazia()) {
            return console.log('A fila está vazia, veja: ');
        } 
        let objString = `${this.items[this.lowestCount]}`;
        for (let i=this.lowestCount+1; i<this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }

} // fim da classe

// testando o funcionamento dos métodos da classe Fila

// primeiramente criando(instanciando) um objeto da classe
const fila = new Fila();

// verificando se a fila está vazia
//console.log('A fila está vazia? ', fila.filaEstaVazia());
console.log(`A fila está vazia? ${fila.filaEstaVazia()}`);

// adicionando elementos na fila
fila.enfileirar('Pedrinho');
fila.enfileirar('Rodrigo');
fila.enfileirar('Airton');
fila.enfileirar('Rebeca');
fila.enfileirar('Daniel');

// imprimindo a fila inteira
console.log(`A fila possui as pessoas: ${fila.imprimeFila()}.`);

// mostrando quantas pessoas está fila
console.log(`A fila possui ${fila.size()} pessoas.`);

// atendendo (removendo) uma pessoa da frente da fila
console.log(`Atendendo(removendo) a pessoa: ${fila.desinfileirar()}.`);

// imprimindo a fila inteira
console.log(`A fila possui agora as pessoas: ${fila.imprimeFila()}.`);

console.log(`Atendendo(removendo) a pessoa: ${fila.desinfileirar()}.`);

// imprimindo a fila inteira
console.log(`A fila possui agora as pessoas: ${fila.imprimeFila()}.`);

console.log(`Atendendo(removendo) a pessoa: ${fila.desinfileirar()}.`);

// imprimindo a fila inteira
console.log(`A fila possui agora as pessoas: ${fila.imprimeFila()}.`);

// agora irei limpar a fila, pois o horário de atendimento
// finalizou
fila.limpaFila();

// imprimindo a fila inteira
console.log(`A fila possui agora as pessoas: ${fila.imprimeFila()}.`);
console.log(`A fila realmente está vazia: ${fila.filaEstaVazia()}.`);
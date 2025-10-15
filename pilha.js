// Vamos codificar uma classe pilha e seus métodos de acesso, empilhamento, remoção, busca etc

class Stack {
  // const array = []; // vc não consegue alterar o valor
  // let array = []; // vc consegue alterar o valor dentro de um bloco
  // var array = []; // vc consegue alterar em qualquer lugar

  constructor() {
    // os elementos da pilha, iremos armazenar no array items
    this.items = [];
  }

  empilha(elemento) {
    // adiciona um elemento no topo da pilha
    // this.items.push(elemento);
    this.items[this.items.length] = elemento;
  }

  remove() {
    // remove o elemento do topo da pilha
    return this.items.pop();
  }

  devolveElementoTopoPilha() {
    // devolve o elemento do topo da pilha
    return this.items[this.items.length - 1];
  }

  pilhaEstaVazia() {
    // informa se a pilha está vazia
    return this.items.length === 0;
  }

  limpaPilha() {
    // limpa a pilha
    this.items = [];
  }

  tamanhoPilha() {
    // devolver o tamanho (quantidade de elementos) da pilha
    return this.items.length;
  }

  print() {
    // imprime os elementos da pilha
    console.log(this.items.toString());
  }
}
/*
  fora da minha classe Pilha, irei instanciar um objeto e depois utilizar os métodos e propriedades da classe
 */
// criando um objeto pilha da classe Stack
const pilha = new Stack();

// verificando se a pilha está vazia
console.log(pilha.pilhaEstaVazia());

// empilhando um elemento na pilha
pilha.empilha(2);
pilha.empilha(5);
pilha.empilha(18);
pilha.print();
class Deck {


    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }


    addFront(element) {
        //Deck Vazio
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.items.lowestCount] = element;
               } else {
                for (let i = this.count; i > 0; i--) {
                    this.items[i] = this.items[i - 1];
                }
                this.lowestCount = 0;
                this.items[0] = element;
                this.count++
               }
    }


    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }


    removeFront() {
        if (this.isEmpty()){
            return undefined;
        }
       
    this.count--
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    return result;
    }


    removeBack() {
        if (this.isEmpty()){
            return undefined;
        }
       
    this.count--
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
    }


    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }


        return this.items[this.lowestCount];
    }


    peekBack() {
        return this.items[this.items.length - 1];
    }


    size() {
        return this.count - this.lowestCount;
    }


    isEmpty() {
        return this.size() === 0;
    }


    toString() {
        if (this.isEmpty()) {
            return `O deck ${this.items} está vazio!`;
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}. ${this.items[i]}`;
        }
        return objString;
    }
}


const deck = new Deck();


console.log(`O Deck está vazio: ${deck.isEmpty()}`);


deck.addBack('Fábio');
deck.addBack('Rodrigo');
deck.addBack('Mariana');
console.log(`O tamanho do Deck é: ${deck.size()}`);

console.log(deck.toString());

deck.addFront('Camila');
console.log(deck.toString());

deck.addBack('Airton');
console.log(deck.toString());
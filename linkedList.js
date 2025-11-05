function linkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(element) {
        const node = new Node(element);
        let current = null;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
        let node = new Node(element),
            current = head,
            previous;

        if (position === 0) {
            node.next = current;
            head = node;
        } else {
            previous = this.getElementAt(position -1);
            current = previous.next;
            node.next = current;
            previous.next = node;
        }
        length++;
        return true;
        } else {
            return false;
        }
    };

    this.getElementAt = function(position) {
        if (position >= 0 && position <= this.size()) {
            let node = head;
            for(let i = 0; i < position && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    };

    this.remove = function(element) {
        let index = this.indexOf(element);
        this.removeAt(index);
    };

    this.removeAt = function(position) {
        if (position > -1 && position <= this.size()) {
            let current = head,
            previous;
            if (position === 0) {
                head = current.next;
            } else {
                for(let i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.indexOf = function(element) {
        let current = head,
        index = 0;
        while(current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function() {
        return head;
    };

    this.toString = function() {
        let current = head,
        string = '';
        while(current) {
            string += current.element + (current.next ? ' -> ' : ' ');
            current = current.next;
        }
        return string;
    };

    this.print = function() {
        console.log(this.toString());
    };
}

let listaEncadeada = new linkedList();

listaEncadeada.append("Mariana");
listaEncadeada.append("Jean");
listaEncadeada.append("Airton");
listaEncadeada.append("Pedro");
listaEncadeada.append("Fábio");

console.log(`A lista está vazia? ${listaEncadeada.isEmpty()}`);
console.log(`A lista contém ${listaEncadeada.size()} elementos.`);
console.log(`A lista contém os elementos: ${listaEncadeada.toString()}`);

listaEncadeada.insert(3,'David');
console.log(`Agora a lista contém os elementos: ${listaEncadeada.toString()}`);

listaEncadeada.insert(0, 'Arthur');
listaEncadeada.insert(0, 'Daniel');
listaEncadeada.insert(2, 'Maria Clara');
console.log(`Agora a lista contém os elementos: ${listaEncadeada.toString()}`);

listaEncadeada.remove('Fábio');
console.log(`Agora a lista sem o Fábio: ${listaEncadeada.toString()}`);

listaEncadeada.remove('Pedro');
console.log(`Agora a lista sem o Pedro: ${listaEncadeada.toString()}`);

listaEncadeada.remove('David');
console.log(`Agora a lista sem o David: ${listaEncadeada.toString()}`);

listaEncadeada.remove('Daniel');
console.log(`Agora a lista sem o Daniel: ${listaEncadeada.toString()}`);

listaEncadeada.removeAt(2);
console.log(`Agora a lista removendo Mariana que é o terceiro elemento: ${listaEncadeada.toString()}`);

console.log(`Qual o primeiro elemento da lista? ${listaEncadeada.getHead().element}`);

console.log(`A lista está vazia? ${listaEncadeada.isEmpty()}`);
console.log(`A lista contém ${listaEncadeada.size()} elementos.`);

console.log('E se eu remover todos esses elementos?');

listaEncadeada.remove('Arthur');
listaEncadeada.remove('Maria Clara');
listaEncadeada.remove('Jean');
listaEncadeada.remove('Airton');

console.log(`A lista está vazia? ${listaEncadeada.isEmpty()}`);
console.log(`A lista contém ${listaEncadeada.size()} elementos.`);
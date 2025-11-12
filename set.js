class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        return element in this.items;
    }

    add(element){
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }
}

const conjuntoA = new Set();

conjuntoA.add(1);
conjuntoA.add(2);
conjuntoA.add(3);

console.log('Elementos do primeiro conjunto: ' + conjuntoA.values());

const conjuntoB = new Set();

conjuntoB.add(3);
conjuntoB.add(4);
conjuntoB.add(5);
conjuntoB.add(6);

const unionAB = conjuntoA.union(conjuntoB);
console.log('Elementos do conjunto A + o conjunto B: ' + unionAB.values());

unionAB.delete(4);

console.log('Ao removermos o elemento 4 teremos um novo conjunto: ');
console.log(unionAB);

unionAB.delete(1);
console.log('Ao removermos o elemento 1 teremos um novo conjunto: ');
console.log(unionAB);

console.log('Agora o conjunto tem o seguinte tamanho: ');
console.log(unionAB.size());

unionAB.add(8);
unionAB.add(9);
console.log('Conjunto mais dois elementos: ' + unionAB.values());
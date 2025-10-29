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
            current = node;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
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
            string += current.element + (current.next ? '->' : ' ');
            current = current.next;
        }
        return string;
    };

    this.print = function() {
        console.log(this.toString());
    };
}
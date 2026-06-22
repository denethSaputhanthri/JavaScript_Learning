class Stack {
    constructor(){
        this.items = [];
    }

    push(items){
        this.items.push(items);
    }

    pop(){
        return this.items.pop();
    }

    top(){
        return this.items[this.items.length -1 ];
    }

    bottom(){
        return this.items[0];
    }

    print(){
        console.log(this.items.join(" -> "));
    }

    size(){
        return console.log(this.items.length);
    }
}

const stack = new Stack();

stack.size(); // Output: 0
stack.print(); // Output: (empty string)
stack.push("AA");
stack.push("BB");
stack.push("CC");
stack.push("DD");
stack.push("EE");
stack.print();  // Output: AA -> BB -> CC -> DD -> EE
stack.size();  // Output: 5

stack.pop() // Output: EE
stack.print(); // Output: AA -> BB -> CC -> DD
stack.size(); // Output: 4

stack.pop() // Output: DD
stack.print(); // Output: AA -> BB -> CC 
stack.size();// Output: 3

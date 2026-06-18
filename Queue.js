class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    } 

    dequeue(){
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.items.shift();
    }

    front(){
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    print(){
        console.log(this.items.join(' <- '));
    }

    size(){
        console.log(this.items.length)
    }

}

const queue =new Queue();

queue.size(); // Output: 0
queue.print(); // Output: (empty string)
queue.enqueue("AA");
queue.enqueue("BB");
queue.enqueue("CC");
queue.enqueue("DD");
queue.enqueue("EE");
queue.print();  // Output: AA <- BB <- CC <- DD <- EE
queue.size();  // Output: 5

queue.dequeue(); // Output: AA
queue.print(); // Output: BB <- CC <- DD <- EE
queue.size(); // Output: 4

queue.dequeue(); // Output: BB
queue.print(); // Output: CC <- DD <- EE
queue.size(); // Output: 3
class Stack{
  constructor(){
    this.customers = [];
  }

  Push(customer){
    this.customers.push(customer);
  }
  Pop(){
    return this.customers.pop();
    
  }
  Print(){
    return console.log(this.customers.join(" <- "));
  }

}

const inStack = new Stack();
inStack.Push("AA");
inStack.Push("BB");
inStack.Push("CC");
inStack.Print();
inStack.Pop(); 
inStack.Push("DD");
inStack.Push("EE");
inStack.Print();
inStack.Pop();
inStack.Print();
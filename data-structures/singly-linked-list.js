class Node {
    constructor(val){
        this.value = val
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head= null
        this.tail= null
        this.length = 0
    }
    push(val){
        const newList = new Node(val)
        if(this.head===null){
            this.head = newList
            this.tail = this.head
            this.length++
        }else{
            this.tail.next = newList
            this.tail= newList
            this.length++
        }
        return this
    }
}

list = new LinkedList()
console.log(list.push(5))
console.log(list.push(6))
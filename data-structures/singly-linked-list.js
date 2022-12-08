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
    };
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
    };
    pop(){
        if(!this.head) return undefined
        let current = this.head
        let pre = current
        while(current.next){
            pre = current
            current = current.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length===0){
            this.head = null
            this.tail = null
        }

        return current
    }
}

list = new LinkedList()
console.log(list.push(5))
// list.push(6)
console.log(list.pop())
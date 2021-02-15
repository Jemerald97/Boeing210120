//queue : FIFO
// enqueue,dequeue
// 지금 해볼것.
// enqueue,dequeue

function Queue(arr){
    this.arr = [];
    if(arr)this.arr = arr;
}
Queue.prototype.isEmpty =  function(){
    return this.arr.length==0;
}
Queue.prototype.enqueue = function(data){
    return this.arr.push(data);
}
Queue.prototype.dequeue =  function(){
    return this.arr.shift();
}
Queue.prototype.getBuffer =  function(){
    return this.arr.slice();
}

function queueSearch(queue,data){
    var bufArr =  queue.getBuffer();
    var bufQueue =  new Queue(bufArr);

    while(!bufQueue.isEmpty()){
        if(bufQueue.dequeue==data)return true;
    }
    return false;
}


var q =  new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
console.log(q);

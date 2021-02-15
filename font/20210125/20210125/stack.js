

//stack : 스택은 한쪽끝에서만 자료를 넣거나 뺄수있는 선형구조로 되어있음.
//나중에 넣은 값이 먼저 나온다. LIFO

// class Stack {
//     constructor(){
//         this.item = [];
//     }
//     push(s){
//         this.item.push(s);
//     }
//     pop(){
//         return this.item.pop();
//     }
// }
function Stack(arr){
    this.arr = [];
    if(arr)this.arr = arr;
}
Stack.prototype.isEmpty =  function(){
    return this.arr.length==0;
}
Stack.prototype.insert =  function(data){
    this.arr.push(data);
}
Stack.prototype.getBuffer = function(){
    return this.arr.slice();
}
Stack.prototype.pop =  function(){
    if(this.isEmpty())throw 'error';
    return this.arr.pop();
}

function stackSearch(st,data){
    var bufArr =  st.getBuffer();
    var bufferStack =  new Stack(bufArr);

    while(!bufferStack.isEmpty()){
        if(bufferStack.pop()==data)return true;
    }
    return false;                                 
}
var s = new Stack();

s.insert(1);
s.insert(2); 
s.insert(3);
s.insert(4);
s.pop();
s.pop();
//console.log(s);


var s1 =  new Stack();
s1.insert(11);
s1.insert(12);
s1.insert(13);
s1.insert(14);
s1.insert(15);
                                    
var search =  stackSearch(s1,11);

console.log(s1);
console.log(search);

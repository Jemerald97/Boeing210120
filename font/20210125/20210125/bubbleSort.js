


function random(n){
    var arr =  new Array();
    var num;
    var temp;

    for(var i = 1;i<=n;i++){
        arr.push(i);
    }
    for(var i = 0;i<arr.length;i++){
        num =  Math.floor(Math.random()*n);
        temp =  arr[i];
        arr[i] =  arr[num];
        arr[num] =temp; 
    }
    return arr;
}


function bubbleSort(array){
    for(var i = 0, arrlen= array.length;i< arrlen;i++){
        for(var k = 0;k<arrlen-1-i;k++){

            if(array[k]>array[k+1]){
                var temp =  array[k];
                array[k] =  array[k+1];
                array[k+1] = temp;
            }
        }
    }
    return array;
}

var bubbleSorting =  random(100000);

console.log('버블 정렬전 : ',bubbleSorting);
var startTime =  new Date().getTime()/1000;
console.log('버블 정렬후 : ',bubbleSort(bubbleSorting));
var endTime =  new Date().getTime()/1000;

console.log(`정렬시간 : ${endTime-startTime}`);


//10만개 :  16초 얼마,..
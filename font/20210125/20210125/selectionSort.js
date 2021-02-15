

function swap(arr,a,b){
    var temp =  arr[a];
    arr[a] =  arr[b];
    arr[b] =  temp;
}
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

function selectionSort(array){

    var arrlen =  array.length;
    var min;

    for(var i = 0;i<arrlen;i++){

        min = i;

        for(var k = i+1;k<arrlen;k++){

            if(array[k]<array[min]){
                min =k;
            }
        }
        if(i!=min){
            swap(array,i,min);
        }   
    }
    return array;
}

var selectionSorting =  random(100000);

console.log('선택 정렬전 : ',selectionSorting);
 var startTime =  new Date().getTime()/1000;
 console.log('선택 정렬후 : ',selectionSort(selectionSorting));
 var endTime =  new Date().getTime()/1000;
 console.log(`정렬시간 : ${endTime-startTime}`);

 //10만개 : 4초 얼마..
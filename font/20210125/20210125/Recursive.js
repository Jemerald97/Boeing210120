//재귀함수 :  자기 자신을 호출한다.

//  function countDown(n){
//     if(n<=1)return;
//     else{
//         console.log(n);
//         countDown(n-1);
//     }
//  }

//피보나치 수열
//1 1 2 3 5 8 13 21 34 55....

function Fibonacci(n){
     var sum = 0;
     var last = 1;
     var lastlast = 0;

    for(let i = 1;i<n;i++){
        sum =  lastlast+last;
        lastlast = last;
        last = sum;
    }
    return sum;
}

function RecursiveFibo(n,lastlast,last){

    if(n==0)return lastlast;
    if(n==1)return last;

    return RecursiveFibo(n-1, last, lastlast+last);

}
for(let i =0;i<10;i++){
    console.log(RecursiveFibo(i,0,1));   
}
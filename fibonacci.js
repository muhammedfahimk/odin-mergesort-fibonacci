
function fibonaccci(num){
    let arr=[0,1]
    if(num==0){
        return arr=[]
    }
    else if(num==1){
        return arr[0];
    }
    else {
        for(i=2;i<num;i++)
        {
            arr.push(arr[arr.length-1]+arr[arr.length-2])
        }
        return arr
    }
}
console.log(fibonaccci(0));
console.log(fibonaccci(1));
console.log(fibonaccci(2));
console.log(fibonaccci(3));
console.log(fibonaccci(4));



// function fibrec(num){
//     if (num<=0){
//         return 0
//     }
//     else if(num==1){
//         return [0,1]
//     }
//     else{
//         let fibseq=fibrec(num-1)
//         console.log(num-1);
//         // console.log(fibseq);
//         fibseq.push(fibseq[fibseq.length-1]+fibseq[fibseq.length-2])
//         return fibseq
//     }
// }
// console.log(fibrec(5));



function fibsrec(n) {
    if (n == 0 || n == 1) {
        return n
    }
    else {
        return (fibsrec(n - 2) + fibsrec(n - 1))
    }


}
// console.log(fibsrec(6))
for (i = 0; i < 6; i++) {
    console.log(fibsrec(i));
}



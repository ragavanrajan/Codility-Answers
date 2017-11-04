// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(A, B) {
    if (A < 0 || A > 100000000) return -1;
    if (B < 0 || B > 100000000) return -1;

    A = A.toString();
    B = B.toString();

    var C = '';

    for(var i = 0; i < A.length || i < B.length; i++){
        if (A[i]) {
            C += A[i];
        }        
        if (B[i]) {
            C += B[i];
        }
    }

    return parseInt(C);    
}
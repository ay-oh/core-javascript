/** 문서용 주석
 * n == 1 -> 1
 * n >= 2 -> n * (n - 1) * ... * 2 * 1
 * 
 * calcFactorial(3)
 * 3 * 2 * 1 == 6
 * 
 * calcFactorial(5)
 * 5 * 4 * 3 * 2 * 1 == 120
 */


// return type
function factorial(n){
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(`factorial(20): ${factorial(30)}`);

/*
TASK: susumuoti skacius nuo [x] iki 0
*/

function sum(from) {
    let suma = 0;
    for (let i = from; i > 0; i--) {
        suma += i;
    }
    return suma;
}

console.log(sum(6));

function recSum(from) {
    if (from > 0) {
        return from + recSum(from - 1);
    } else {
        return 0;
    }
}

console.log(recSum(5));

/*
5   suma = 5 + recSum(4)
                4 + recSum(3)
                    3 + recSum(2)
                        2 + recSum(1)
                            1 + recSum(0)
                                0
                                */
// Rekursija - kai funkcija iskviecia pati save.

// TASK: isvadinti skaicius nuo [X] iki 0 (nulio).
// e.g. 5, 4, 3, 2, 1, 0.

function listNumbers(from) {
    for (let i = from; i >= 0; i--) {
        console.log(i);
    }
}

function recListNumbers(from) {
    console.log(from);
    if (from > 0) {
        recListNumbers(from - 1);
    }
}

listNumbers(5);
console.log('----------');
recListNumbers(5);

/*
recListNumbers(5)   -> 5
    recListNumbers(4)   -> 4
        recListNumbers(3)   -> 3
            recListNumbers(2)   -> 2
                recListNumbers(1)   -> 1
                    recListNumbers(0)   -> 0
                        recListNumbers(-1)   -> -1
*/
const fibonacci = function(number) {
    let seqNumber = parseInt(number);
    let current = 0;
    let a = 0;
    let b = 1;

    if (seqNumber == 0) {
        return 0;
    } else if (seqNumber < 0) {
        return 'OOPS';
    } else {
        for (let i = 2; i <= seqNumber; i++) {
            current = a + b;
            a = b;
            b = current;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;

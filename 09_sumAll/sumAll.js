const sumAll = function(a, b) {
    let start, end;
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number" || (a % 1) != 0 || (b % 1) != 0) {
        return "ERROR"
    } else if (a > b) {
        start = b;
        end = a;
    } else if (a < b) {
        start = a;
        end = b;
    }
    result = start;
    for (let i = result + 1; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

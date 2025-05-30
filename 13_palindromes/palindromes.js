const palindromes = function (palindrome) {
    let forwards = palindrome.split('').filter(char => { return /[a-zA-Z0-9]/.test(char); }).join('').toLowerCase();
    let backwards = forwards.split('').reverse().join('');

    return forwards == backwards;
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function (string) {
    const newString = (string.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')).toLowerCase();
    let palindrom = '';
    for (let i = 0; i < newString.length; i++) {
        palindrom += newString[newString.length-i-1];
    }
    console.log(palindrom);
    return newString === palindrom;
};

// Do not edit below this line
module.exports = palindromes;

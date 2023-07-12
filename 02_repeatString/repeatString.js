const repeatString = function(word, number) {
    if (number <0) {
        return "ERROR"
    }
    let string = ""
    for (let i=1; i <= number; i++) {
        string = string + word
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;

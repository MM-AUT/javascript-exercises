const sumAll = function(min, max) {
    let sum = 0
    if (min > max) {
        const temp = max
        max = min
        min = temp
    }
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;

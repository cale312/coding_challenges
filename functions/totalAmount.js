module.exports = (arr) => {
    let total = 0;
    arr.forEach(number => {
        total += number;
    });
    return total;
}
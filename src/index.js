module.exports = function reverse (n) {
    let result=Number(String(Math.abs(n)).split('').reverse().join(''))
    return result;
}

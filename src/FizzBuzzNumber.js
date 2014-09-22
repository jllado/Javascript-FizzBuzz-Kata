function FizzBuzzNumber(number) {
    this.fizzBuzzNumber = number;
}
FizzBuzzNumber.prototype.isDivisibleBy = function(divisor) {
    if (this.fizzBuzzNumber === 0)
        return false;
    return this.fizzBuzzNumber % divisor === 0;
};
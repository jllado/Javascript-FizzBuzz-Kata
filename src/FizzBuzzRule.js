function FizzBuzzRule() {
    this.FIZZBUZZ = "FizzBuzz";
    this.FIZZ_NUMBER = 3;
    this.BUZZ_NUMBER = 5;

    Rule.call(this);
}

FizzBuzzRule.prototype = Object.create(Rule.prototype);
FizzBuzzRule.prototype.constructor = FizzBuzzRule;

FizzBuzzRule.prototype.check = function (input) {
    return input.isDivisibleBy(this.FIZZ_NUMBER) && input.isDivisibleBy(this.BUZZ_NUMBER);
};

FizzBuzzRule.prototype.action = function () {
    return this.FIZZBUZZ;
};

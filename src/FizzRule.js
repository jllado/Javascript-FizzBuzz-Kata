function FizzRule() {
    this.FIZZ = "Fizz";
    this.FIZZ_NUMBER = 3;

    Rule.call(this);
}

FizzRule.prototype = Object.create(Rule.prototype);
FizzRule.prototype.constructor = FizzRule;

FizzRule.prototype.check = function (input) {
    return input.isDivisibleBy(this.FIZZ_NUMBER);
};

FizzRule.prototype.action = function () {
    return this.FIZZ;
};

function BuzzRule() {
    this.BUZZ = "Buzz";
    this.BUZZ_NUMBER = 5;

    FizzRule.call(this);
}

BuzzRule.prototype = Object.create(FizzRule.prototype);
BuzzRule.prototype.constructor = BuzzRule;

BuzzRule.prototype.check = function (input) {
    return input.isDivisibleBy(this.BUZZ_NUMBER);
}

BuzzRule.prototype.action = function () {
    return this.BUZZ;
}

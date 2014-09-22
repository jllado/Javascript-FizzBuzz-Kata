function FizzBuzz(rules) {
    this.rules = rules;

    this.play = function (number) {
        var result = "";
        _.each(this.rules, function (rule) {
            if (result === "" && rule.check(new FizzBuzzNumber(number))) {
                result = rule.action(number);
            }
        });
        return result || number;
    }
}
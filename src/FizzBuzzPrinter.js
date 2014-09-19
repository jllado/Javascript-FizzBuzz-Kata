var FizzBuzzGenerator = function () {
    var fizzBuzz = new FizzBuzz([new FizzBuzzRule(), new FizzRule(), new BuzzRule()]);

    function generate(number) {
        var i, result = [];
        for(i = 1; i <= number; i += 1) {
            result.push(fizzBuzz.play(i));
        }
        return result;
    }

    return {
        generate: generate
    };
}();

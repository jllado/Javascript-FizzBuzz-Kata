var Fizzbuzz;
Fizzbuzz = function () {
    var FIZZ_NUMBER = 3;
    var BUZZ_NUMBER = 5;

    function play(number) {

        if (number.isDivisibleBy(FIZZ_NUMBER)) {
            return "Fizz";
        }
        if (number.isDivisibleBy(BUZZ_NUMBER)) {
            return "Buzz";
        }
        return number;
    };

    return {
        play: play
    };
}();
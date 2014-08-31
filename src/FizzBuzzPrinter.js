var FizzBuzzPrinter = {};
FizzBuzzPrinter.print = function (number) {
    var i, result = [];
    for(i = 1; i <= number; i += 1) {
        result.push(Fizzbuzz.play(i));
    }
    return result;
}

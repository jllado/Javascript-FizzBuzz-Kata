// 1 -> [1]
// 2 -> [1, 2]
// 3 -> [1, 2, Fizz]
// 4 -> [1, 2, Fizz, 4]
// 5 -> [1, 2, Fizz, 4, Buzz]
// 6 -> [1, 2, Fizz, 4, Buzz, Fizz]
// 0 -> []

describe("Print FizzBuzzPrinter", function () {

    it("should return [1] when print 1", function () {
        expect(FizzBuzzPrinter.print(1)).toEqual([1]);
    });

    it("should return [1, 2] when print 2", function () {
        expect(FizzBuzzPrinter.print(2)).toEqual([1, 2]);
    });

    it("should return [1, 2, Fizz] when print 3", function () {
        expect(FizzBuzzPrinter.print(3)).toEqual([1, 2, "Fizz"]);
    });

    it("should return [1, 2, Fizz, 4, Buzz, Fizz] when print 6", function () {
        expect(FizzBuzzPrinter.print(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
    });

    it("should contains FizzBuzz when print 15", function () {
        expect(FizzBuzzPrinter.print(15)).toContain("FizzBuzz");
    });

    it("should return [] when print 0", function () {
        expect(FizzBuzzPrinter.print(0)).toEqual([]);
    });
});
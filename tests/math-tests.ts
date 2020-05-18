import { Math } from "@source/index";
//-----------------------------------------------------------------------------
describe("Math", () => {
    describe("add", () => {
        test("summands given -> correct sum", () => {
            const sut = new Math();

            const actual = sut.add(2, 1);

            expect(actual).toBe(3);
        });
        //---------------------------------------------------------------------
        test.each`
            a   | b    | expected
           ${0} | ${0} | ${0}
           ${1} | ${2} | ${3}
           ${2} | ${1} | ${3}
        `("summands given -> correct sum", ({ a, b, expected }) => {
            const sut = new Math();

            const actual = sut.add(a, b);

            expect(actual).toBe(expected);
        });
        //---------------------------------------------------------------------
        test.each([
            [9007199254740992, 1],
            [1, 9007199254740992]
        ])("MaxValue + 1 -> throws RangeError", (a, b) => {
            const sut = new Math();

            expect(() => sut.add(a, b)).toThrowError(RangeError);
        });
    });
    //---------------------------------------------------------------------
    describe("subtract", () => {
        test.each`
            a   | b    | expected
           ${0} | ${0} | ${0}
           ${1} | ${2} | ${-1}
           ${2} | ${1} | ${1}
        `("args given -> correct difference", ({ a, b, expected }) => {
            const sut = new Math();

            const actual = sut.subtract(a, b);

            expect(actual).toBe(expected);
        });
    });
    //---------------------------------------------------------------------
    describe("divide", () => {
        test.each`
           a    | b    | expected
          ${0}  | ${1} | ${0}
          ${10} | ${2} | ${5}
       `("summands given -> correct sum", ({ a, b, expected }) => {
            const sut = new Math();

            const actual = sut.divide(a, b);

            expect(actual).toBe(expected);
        });
        //---------------------------------------------------------------------
        test("divisor is 0 -> throws RangeError", () => {
            const sut = new Math();

            expect(() => sut.divide(1, 0)).toThrowError(RangeError);
        });
    });
});

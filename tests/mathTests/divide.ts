import { Math } from "@source/index";
//-----------------------------------------------------------------------------
describe("Math.divide", () => {
    test.each`
        a    | b    | expected
       ${0}  | ${1} | ${0}
       ${10} | ${2} | ${5}
    `("summands given -> correct sum", ({ a, b, expected }) => {
        const sut = new Math();

        const actual = sut.divide(a, b);

        expect(actual).toBe(expected);
    });
    //-------------------------------------------------------------------------
    test("divisor is 0 -> throws RangeError", () => {
        const sut = new Math();

        expect(() => sut.divide(1, 0)).toThrowError(RangeError);
    });
});

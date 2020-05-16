import { Math } from "@source/index";
//-----------------------------------------------------------------------------
describe("Math.subtract", () => {
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

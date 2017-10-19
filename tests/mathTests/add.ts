//import { Math } from "../../lib/math";
import { Math } from "../../lib/index";
import { TestFixture, TestCase, Test, Expect } from "alsatian";
//-----------------------------------------------------------------------------
@TestFixture()
export class Math_Add {
    @TestCase(0, 0, 0)
    @TestCase(1, 2, 3)
    @TestCase(2, 1, 3)
    public Summands_given___correct_sum(a: number, b: number, res: number): void {
        const sut = new Math();

        const actual = sut.Add(a, b);

        Expect(actual).toBe(res);
    }
}
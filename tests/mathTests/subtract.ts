//import { Math } from "../../lib/math";
import { Math } from "../../lib/index";
import { TestFixture, TestCase, Expect } from "alsatian";
//-----------------------------------------------------------------------------
@TestFixture()
export class Math_Subtract {
	@TestCase(0, 0, 0)
	@TestCase(1, 2, -1)
	@TestCase(2, 1, 1)
	public Args_given___correct_difference(a: number, b: number, res: number): void {
		const sut = new Math();

		const actual = sut.Subtract(a, b);

		Expect(actual).toBe(res);
	}
}

export class Math {
    public Add(a: number, b: number): number {
        //if (a === Number.MAX_SAFE_INTEGER + 1 || b === Number.MAX_SAFE_INTEGER + 1)
        //    throw new RangeError("Summand(s) must not be MAX_SAFE_INTEGER (or greater)");

        return a + b;
    }
    //-------------------------------------------------------------------------
    public Subtract(a: number, b: number): number {
        return a - b;
    }
    //-------------------------------------------------------------------------
    public Multiply(a: number, b: number): number {
        return a * b;
    }
    //-------------------------------------------------------------------------
    public Divide(a: number, b: number): number {
        if (b == 0) throw new RangeError("Divisor must not be 0");

        return a / b;
    }
}

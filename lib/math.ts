export class Math {
    public Add(a: number, b: number): number {
        return a + b;
    }
    //-------------------------------------------------------------------------
    public Subtract(a: number, b: number): number {
        return a - b;
    }
    //-------------------------------------------------------------------------
    public Divide(a: number, b: number): number {
        if (b == 0) throw new RangeError("Divisor must not be 0");

        return a / b;
    }
}
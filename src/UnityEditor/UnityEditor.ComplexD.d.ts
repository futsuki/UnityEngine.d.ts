declare namespace UnityEditor {
  class ComplexD {
    // constructors
    constructor(real: number, imag: number);
    // methods
    static Add(a: UnityEditor.ComplexD, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Add(a: UnityEditor.ComplexD, b: number): UnityEditor.ComplexD;
    static Add(a: number, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Sub(a: UnityEditor.ComplexD, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Sub(a: UnityEditor.ComplexD, b: number): UnityEditor.ComplexD;
    static Sub(a: number, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Mul(a: UnityEditor.ComplexD, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Mul(a: UnityEditor.ComplexD, b: number): UnityEditor.ComplexD;
    static Mul(a: number, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Div(a: UnityEditor.ComplexD, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Div(a: number, b: UnityEditor.ComplexD): UnityEditor.ComplexD;
    static Div(a: UnityEditor.ComplexD, b: number): UnityEditor.ComplexD;
    static Exp(omega: number): UnityEditor.ComplexD;
    static Pow(a: UnityEditor.ComplexD, b: number): UnityEditor.ComplexD;
    Mag2(): number;
    Mag(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    real: number;
    imag: number;
  }
}

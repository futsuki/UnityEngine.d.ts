declare namespace UnityEngine.Assertions.Must {
  class MustExtensions {
    // constructors
    private constructor();
    // methods
    static MustBeTrue(value: boolean): any;
    static MustBeTrue(value: boolean, message: string): any;
    static MustBeFalse(value: boolean): any;
    static MustBeFalse(value: boolean, message: string): any;
    static MustBeApproximatelyEqual(actual: number, expected: number): any;
    static MustBeApproximatelyEqual(actual: number, expected: number, message: string): any;
    static MustBeApproximatelyEqual(actual: number, expected: number, tolerance: number): any;
    static MustBeApproximatelyEqual(actual: number, expected: number, tolerance: number, message: string): any;
    static MustNotBeApproximatelyEqual(actual: number, expected: number): any;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, message: string): any;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, tolerance: number): any;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, tolerance: number, message: string): any;
    // properties
    // fields
  }
}

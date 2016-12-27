declare namespace UnityEngine.Assertions.Must {
  class MustExtensions extends System.Object {
    // constructors
    protected constructor();
    // methods
    static MustBeTrue(value: boolean): void;
    static MustBeTrue(value: boolean, message: string): void;
    static MustBeFalse(value: boolean): void;
    static MustBeFalse(value: boolean, message: string): void;
    static MustBeApproximatelyEqual(actual: number, expected: number): void;
    static MustBeApproximatelyEqual(actual: number, expected: number, message: string): void;
    static MustBeApproximatelyEqual(actual: number, expected: number, tolerance: number): void;
    static MustBeApproximatelyEqual(actual: number, expected: number, tolerance: number, message: string): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, message: string): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, tolerance: number): void;
    static MustNotBeApproximatelyEqual(actual: number, expected: number, tolerance: number, message: string): void;
    // properties
    // fields
  }
}

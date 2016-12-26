declare namespace UnityEngine.Assertions {
  class Assert {
    // constructors
    private constructor();
    // methods
    static Equals(obj1: any, obj2: any): boolean;
    static ReferenceEquals(obj1: any, obj2: any): boolean;
    static IsTrue(condition: boolean): void;
    static IsTrue(condition: boolean, message: string): void;
    static IsFalse(condition: boolean): void;
    static IsFalse(condition: boolean, message: string): void;
    static AreApproximatelyEqual(expected: number, actual: number): void;
    static AreApproximatelyEqual(expected: number, actual: number, message: string): void;
    static AreApproximatelyEqual(expected: number, actual: number, tolerance: number): void;
    static AreApproximatelyEqual(expected: number, actual: number, tolerance: number, message: string): void;
    static AreNotApproximatelyEqual(expected: number, actual: number): void;
    static AreNotApproximatelyEqual(expected: number, actual: number, message: string): void;
    static AreNotApproximatelyEqual(expected: number, actual: number, tolerance: number): void;
    static AreNotApproximatelyEqual(expected: number, actual: number, tolerance: number, message: string): void;
    static AreEqual(expected: UnityEngine.Object, actual: UnityEngine.Object, message: string): void;
    static AreNotEqual(expected: UnityEngine.Object, actual: UnityEngine.Object, message: string): void;
    static IsNull(value: UnityEngine.Object, message: string): void;
    static IsNotNull(value: UnityEngine.Object, message: string): void;
    // properties
    // fields
    static raiseExceptions: boolean;
  }
}

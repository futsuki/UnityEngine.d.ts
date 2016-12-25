declare namespace UnityEngine.Assertions {
  class Assert {
    // constructors
    private constructor();
    // methods
    static Equals(obj1: any, obj2: any): boolean;
    static ReferenceEquals(obj1: any, obj2: any): boolean;
    static IsTrue(condition: boolean): any;
    static IsTrue(condition: boolean, message: string): any;
    static IsFalse(condition: boolean): any;
    static IsFalse(condition: boolean, message: string): any;
    static AreApproximatelyEqual(expected: number, actual: number): any;
    static AreApproximatelyEqual(expected: number, actual: number, message: string): any;
    static AreApproximatelyEqual(expected: number, actual: number, tolerance: number): any;
    static AreApproximatelyEqual(expected: number, actual: number, tolerance: number, message: string): any;
    static AreNotApproximatelyEqual(expected: number, actual: number): any;
    static AreNotApproximatelyEqual(expected: number, actual: number, message: string): any;
    static AreNotApproximatelyEqual(expected: number, actual: number, tolerance: number): any;
    static AreNotApproximatelyEqual(expected: number, actual: number, tolerance: number, message: string): any;
    static AreEqual(expected: UnityEngine.Object, actual: UnityEngine.Object, message: string): any;
    static AreNotEqual(expected: UnityEngine.Object, actual: UnityEngine.Object, message: string): any;
    static IsNull(value: UnityEngine.Object, message: string): any;
    static IsNotNull(value: UnityEngine.Object, message: string): any;
    // properties
    // fields
    static raiseExceptions: boolean;
  }
}

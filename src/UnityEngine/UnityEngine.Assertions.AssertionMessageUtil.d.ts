declare namespace UnityEngine.Assertions {
  class AssertionMessageUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static GetMessage(failureMessage: string): string;
    static GetMessage(failureMessage: string, expected: string): string;
    static GetEqualityMessage(actual: any, expected: any, expectEqual: boolean): string;
    static NullFailureMessage(value: any, expectNull: boolean): string;
    static BooleanFailureMessage(expected: boolean): string;
    // properties
    // fields
  }
}

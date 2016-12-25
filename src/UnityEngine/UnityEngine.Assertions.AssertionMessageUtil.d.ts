declare namespace UnityEngine.Assertions {
  class AssertionMessageUtil {
    // constructors
    constructor();
    // methods
    static GetMessage(failureMessage: string): string;
    static GetMessage(failureMessage: string, expected: string): string;
    static GetEqualityMessage(actual: any, expected: any, expectEqual: boolean): string;
    static NullFailureMessage(value: any, expectNull: boolean): string;
    static BooleanFailureMessage(expected: boolean): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

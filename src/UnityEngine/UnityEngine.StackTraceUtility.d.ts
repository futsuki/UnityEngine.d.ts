declare namespace UnityEngine {
  class StackTraceUtility {
    // constructors
    constructor();
    // methods
    static ExtractStackTrace(): string;
    static ExtractStringFromException(exception: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

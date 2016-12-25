declare namespace UnityEditor {
  class StackFrame {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    lineNumber: number;
    sourceFile: string;
    methodName: string;
    signature: string;
    moduleName: string;
  }
}

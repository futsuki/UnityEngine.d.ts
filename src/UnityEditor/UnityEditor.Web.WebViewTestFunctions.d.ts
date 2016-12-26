declare namespace UnityEditor.Web {
  class WebViewTestFunctions {
    // constructors
    constructor();
    // methods
    ReturnInt(): number;
    ReturnString(): string;
    ReturnBool(): boolean;
    ReturnNumberArray(): number[];
    ReturnStringArray(): string[];
    ReturnBoolArray(): boolean[];
    ReturnObject(): UnityEditor.Web.TestObject;
    AcceptInt(passedInt: number): void;
    AcceptString(passedString: string): void;
    AcceptBool(passedBool: boolean): void;
    AcceptIntArray(passedArray: number[]): void;
    AcceptStringArray(passedArray: string[]): void;
    AcceptBoolArray(passedArray: boolean[]): void;
    AcceptTestObject(passedObject: UnityEditor.Web.TestObject): void;
    VoidMethod(logMessage: string): void;
    ArrayReverse(input: string[]): string[];
    LogMessage(message: string): void;
    static RunTestScript(path: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

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
    AcceptInt(passedInt: number): any;
    AcceptString(passedString: string): any;
    AcceptBool(passedBool: boolean): any;
    AcceptIntArray(passedArray: number[]): any;
    AcceptStringArray(passedArray: string[]): any;
    AcceptBoolArray(passedArray: boolean[]): any;
    AcceptTestObject(passedObject: UnityEditor.Web.TestObject): any;
    VoidMethod(logMessage: string): any;
    ArrayReverse(input: string[]): string[];
    LogMessage(message: string): any;
    static RunTestScript(path: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

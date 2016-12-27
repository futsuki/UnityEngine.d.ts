declare namespace UnityEngine {
  class AndroidJNIHelper extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetConstructorID(javaClass: any): any;
    static GetConstructorID(javaClass: any, signature: string): any;
    static GetConstructorID(jclass: any, args: any[]): any;
    static GetMethodID(javaClass: any, methodName: string, signature: string): any;
    static GetMethodID(javaClass: any, methodName: string): any;
    static GetMethodID(javaClass: any, methodName: string, signature: string, isStatic: boolean): any;
    static GetMethodID(jclass: any, methodName: string, args: any[], isStatic: boolean): any;
    static GetFieldID(javaClass: any, fieldName: string, signature: string): any;
    static GetFieldID(javaClass: any, fieldName: string): any;
    static GetFieldID(javaClass: any, fieldName: string, signature: string, isStatic: boolean): any;
    static CreateJavaRunnable(jrunnable: (() => void)): any;
    static CreateJavaProxy(proxy: UnityEngine.AndroidJavaProxy): any;
    static ConvertToJNIArray(array: any): any;
    static CreateJNIArgArray(args: any[]): UnityEngine.jvalue[];
    static DeleteJNIArgArray(args: any[], jniArgs: UnityEngine.jvalue[]): void;
    static GetSignature(obj: any): string;
    static GetSignature(args: any[]): string;
    // properties
    static debug: boolean;
    // fields
  }
}

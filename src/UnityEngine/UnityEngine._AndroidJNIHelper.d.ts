declare namespace UnityEngine {
  class _AndroidJNIHelper extends System.Object {
    // constructors
    constructor();
    // methods
    static CreateJavaProxy(delegateHandle: number, proxy: UnityEngine.AndroidJavaProxy): any;
    static CreateJavaRunnable(jrunnable: (() => void)): any;
    static InvokeJavaProxyMethod(proxy: UnityEngine.AndroidJavaProxy, jmethodName: any, jargs: any): any;
    static CreateJNIArgArray(args: any[]): UnityEngine.jvalue[];
    static UnboxArray(obj: UnityEngine.AndroidJavaObject): any;
    static Unbox(obj: UnityEngine.AndroidJavaObject): any;
    static Box(obj: any): UnityEngine.AndroidJavaObject;
    static DeleteJNIArgArray(args: any[], jniArgs: UnityEngine.jvalue[]): void;
    static ConvertToJNIArray(array: any): any;
    static GetConstructorID(jclass: any, args: any[]): any;
    static GetConstructorID(jclass: any, signature: string): any;
    static GetMethodID(jclass: any, methodName: string, args: any[], isStatic: boolean): any;
    static GetMethodID(jclass: any, methodName: string, signature: string, isStatic: boolean): any;
    static GetFieldID(jclass: any, fieldName: string, signature: string, isStatic: boolean): any;
    static GetSignature(obj: any): string;
    static GetSignature(args: any[]): string;
    // properties
    // fields
  }
}

declare namespace UnityEngine {
  class AndroidJavaProxy {
    // constructors
    constructor(javaInterface: string);
    constructor(javaInterface: UnityEngine.AndroidJavaClass);
    // methods
    Invoke(methodName: string, args: any[]): UnityEngine.AndroidJavaObject;
    Invoke(methodName: string, javaArgs: UnityEngine.AndroidJavaObject[]): UnityEngine.AndroidJavaObject;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    javaInterface: UnityEngine.AndroidJavaClass;
  }
}

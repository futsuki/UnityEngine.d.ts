declare namespace UnityEngine {
  class AndroidJavaProxy extends System.Object {
    // constructors
    constructor(javaInterface: string);
    constructor(javaInterface: UnityEngine.AndroidJavaClass);
    // methods
    Invoke(methodName: string, args: any[]): UnityEngine.AndroidJavaObject;
    Invoke(methodName: string, javaArgs: UnityEngine.AndroidJavaObject[]): UnityEngine.AndroidJavaObject;
    // properties
    // fields
    javaInterface: UnityEngine.AndroidJavaClass;
  }
}

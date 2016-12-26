declare namespace UnityEngine {
  class AndroidJavaRunnableProxy {
    // constructors
    constructor(runnable: UnityEngine.AndroidJavaRunnable);
    // methods
    run(): void;
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

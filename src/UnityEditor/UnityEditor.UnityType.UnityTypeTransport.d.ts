declare namespace UnityEditor.UnityType {
  class UnityTypeTransport {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    runtimeTypeIndex: number;
    descendantCount: number;
    baseClassIndex: number;
    className: string;
    classNamespace: string;
    persistentTypeID: number;
    flags: number;
  }
}

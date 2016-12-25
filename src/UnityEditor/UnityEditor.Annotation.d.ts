declare namespace UnityEditor {
  class Annotation {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    iconEnabled: number;
    gizmoEnabled: number;
    flags: number;
    classID: number;
    scriptClass: string;
  }
}

declare namespace UnityEngine {
  class ScriptableObject {
    // constructors
    constructor();
    // methods
    SetDirty(): any;
    static CreateInstance(className: string): UnityEngine.ScriptableObject;
    static CreateInstance(type: any): UnityEngine.ScriptableObject;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}

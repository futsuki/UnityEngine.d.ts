declare namespace UnityEngine {
  class ScriptableObject extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    SetDirty(): void;
    static CreateInstance(className: string): UnityEngine.ScriptableObject;
    static CreateInstance(type: any): UnityEngine.ScriptableObject;
    // properties
    // fields
  }
}

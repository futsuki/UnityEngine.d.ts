declare namespace UnityEditor {
  class MonoScript {
    // constructors
    constructor();
    // methods
    GetClass(): any;
    static FromMonoBehaviour(behaviour: any): UnityEditor.MonoScript;
    static FromScriptableObject(scriptableObject: any): UnityEditor.MonoScript;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly text: string;
    readonly bytes: number[];
    name: string;
    hideFlags: any;
    // fields
  }
}

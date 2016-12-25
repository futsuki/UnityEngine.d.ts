declare namespace UnityEditor {
  class LookDevEnvironmentLibrary {
    // constructors
    constructor();
    // methods
    InsertHDRI(cubemap: any): any;
    InsertHDRI(cubemap: any, insertionIndex: number): any;
    RemoveHDRI(cubemap: any): boolean;
    CleanupDeletedHDRI(): any;
    SetLookDevView(lookDevView: UnityEditor.LookDevView): any;
    OnBeforeSerialize(): any;
    OnAfterDeserialize(): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    dirty: boolean;
    readonly hdriList: any;
    readonly hdriCount: number;
    name: string;
    hideFlags: any;
    // fields
  }
}

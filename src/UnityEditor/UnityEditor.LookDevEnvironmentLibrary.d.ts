declare namespace UnityEditor {
  class LookDevEnvironmentLibrary {
    // constructors
    constructor();
    // methods
    InsertHDRI(cubemap: any): void;
    InsertHDRI(cubemap: any, insertionIndex: number): void;
    RemoveHDRI(cubemap: any): boolean;
    CleanupDeletedHDRI(): void;
    SetLookDevView(lookDevView: UnityEditor.LookDevView): void;
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    SetDirty(): void;
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

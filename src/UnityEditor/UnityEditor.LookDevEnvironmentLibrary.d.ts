declare namespace UnityEditor {
  class LookDevEnvironmentLibrary extends UnityEngine.ScriptableObject {
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
    // properties
    dirty: boolean;
    readonly hdriList: UnityEditor.CubemapInfo[];
    readonly hdriCount: number;
    // fields
  }
}

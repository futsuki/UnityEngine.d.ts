  class PatchImportSettingRecycleID {
    // constructors
    constructor();
    // methods
    static Patch(serializedObject: UnityEditor.SerializedObject, classID: number, oldName: string, newName: string): void;
    static PatchMultiple(serializedObject: UnityEditor.SerializedObject, classID: number, oldNames: string[], newNames: string[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }

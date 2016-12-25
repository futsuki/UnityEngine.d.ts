declare namespace UnityEditor.Collaboration.Change {
  class RevertableStates {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Revertable: UnityEditor.Collaboration.Change.RevertableStates;
    static NotRevertable: UnityEditor.Collaboration.Change.RevertableStates;
    static Revertable_File: UnityEditor.Collaboration.Change.RevertableStates;
    static Revertable_Folder: UnityEditor.Collaboration.Change.RevertableStates;
    static Revertable_EmptyFolder: UnityEditor.Collaboration.Change.RevertableStates;
    static NotRevertable_File: UnityEditor.Collaboration.Change.RevertableStates;
    static NotRevertable_Folder: UnityEditor.Collaboration.Change.RevertableStates;
    static NotRevertable_FileAdded: UnityEditor.Collaboration.Change.RevertableStates;
    static NotRevertable_FolderAdded: UnityEditor.Collaboration.Change.RevertableStates;
    static NotRevertable_FolderContainsAdd: UnityEditor.Collaboration.Change.RevertableStates;
    static InvalidRevertableState: UnityEditor.Collaboration.Change.RevertableStates;
  }
}

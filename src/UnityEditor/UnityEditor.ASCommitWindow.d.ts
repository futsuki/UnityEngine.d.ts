declare namespace UnityEditor {
  class ASCommitWindow {
    // constructors
    constructor(parentWin: UnityEditor.ASMainWindow, guidsToTransfer: string[]);
    // methods
    static MarkAllFolderDependenciesForDiscarding(pvState: UnityEditor.ParentViewState, anotherPvState: UnityEditor.ParentViewState): boolean;
    static SomethingDiscardableSelected(st: UnityEditor.ParentViewState): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

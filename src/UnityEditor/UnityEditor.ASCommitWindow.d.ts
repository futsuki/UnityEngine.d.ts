declare namespace UnityEditor {
  class ASCommitWindow extends System.Object {
    // constructors
    constructor(parentWin: UnityEditor.ASMainWindow, guidsToTransfer: string[]);
    // methods
    static MarkAllFolderDependenciesForDiscarding(pvState: UnityEditor.ParentViewState, anotherPvState: UnityEditor.ParentViewState): boolean;
    static SomethingDiscardableSelected(st: UnityEditor.ParentViewState): boolean;
    // properties
    // fields
  }
}

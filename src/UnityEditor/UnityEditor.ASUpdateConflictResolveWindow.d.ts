declare namespace UnityEditor {
  class ASUpdateConflictResolveWindow extends System.Object {
    // constructors
    constructor(conflicting: string[]);
    // methods
    GetDownloadConflicts(): string[];
    GetNameConflicts(): string[];
    CanContinue(): boolean;
    OnSelectionChange(parentWin: UnityEditor.ASUpdateWindow): void;
    DoGUI(parentWin: UnityEditor.ASUpdateWindow): boolean;
    // properties
    // fields
  }
}

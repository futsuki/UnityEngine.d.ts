declare namespace UnityEditor {
  class ASUpdateConflictResolveWindow {
    // constructors
    constructor(conflicting: string[]);
    // methods
    GetDownloadConflicts(): string[];
    GetNameConflicts(): string[];
    CanContinue(): boolean;
    OnSelectionChange(parentWin: UnityEditor.ASUpdateWindow): any;
    DoGUI(parentWin: UnityEditor.ASUpdateWindow): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

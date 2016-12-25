declare namespace UnityEditor {
  class ASUpdateWindow {
    // constructors
    constructor(parentWin: UnityEditor.ASMainWindow, changesets: UnityEditor.Changeset[]);
    // methods
    OnSelectionChange(): any;
    GetSelectedRevisionNumber(): number;
    SetSelectedRevisionLine(selIndex: number): any;
    GetGUIDs(): string[];
    DoUpdate(afterResolvingConflicts: boolean): boolean;
    ShowConflictResolutions(conflicting: string[]): any;
    UpdateGUI(): any;
    Repaint(): any;
    DoGUI(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ShowingConflicts: boolean;
    readonly CanContinue: boolean;
    // fields
  }
}

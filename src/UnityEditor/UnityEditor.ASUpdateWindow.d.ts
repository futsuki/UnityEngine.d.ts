declare namespace UnityEditor {
  class ASUpdateWindow {
    // constructors
    constructor(parentWin: UnityEditor.ASMainWindow, changesets: UnityEditor.Changeset[]);
    // methods
    OnSelectionChange(): void;
    GetSelectedRevisionNumber(): number;
    SetSelectedRevisionLine(selIndex: number): void;
    GetGUIDs(): string[];
    DoUpdate(afterResolvingConflicts: boolean): boolean;
    ShowConflictResolutions(conflicting: string[]): void;
    UpdateGUI(): void;
    Repaint(): void;
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

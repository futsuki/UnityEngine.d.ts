declare namespace UnityEditor {
  class RenameOverlay extends System.Object {
    // constructors
    constructor();
    // methods
    BeginRename(name: string, userData: number, delay: number): boolean;
    EndRename(acceptChanges: boolean): void;
    Clear(): void;
    HasKeyboardFocus(): boolean;
    IsRenaming(): boolean;
    OnEvent(): boolean;
    OnGUI(): boolean;
    OnGUI(textFieldStyle: any): boolean;
    // properties
    readonly name: string;
    readonly originalName: string;
    readonly userAcceptedRename: boolean;
    readonly userData: number;
    readonly isWaitingForDelay: boolean;
    editFieldRect: any;
    isRenamingFilename: boolean;
    // fields
  }
}

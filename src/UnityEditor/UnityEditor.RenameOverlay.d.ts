declare namespace UnityEditor {
  class RenameOverlay {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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

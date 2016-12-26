declare namespace UnityEditor {
  class WindowLayout {
    // constructors
    constructor();
    // methods
    static Unmaximize(win: UnityEditor.EditorWindow): void;
    static AddSplitViewAndChildrenRecurse(splitview: UnityEditor.View, list: any): void;
    static SaveSplitViewAndChildren(splitview: UnityEditor.View, win: UnityEditor.EditorWindow, path: string): void;
    static Maximize(win: UnityEditor.EditorWindow): void;
    static MaximizePrepare(win: UnityEditor.EditorWindow): boolean;
    static MaximizePresent(win: UnityEditor.EditorWindow): void;
    static LoadWindowLayout(path: string, newProjectLayoutWasCreated: boolean): boolean;
    static CloseWindows(): void;
    static SaveWindowLayout(path: string): void;
    static EnsureMainWindowHasBeenLoaded(): void;
    static SaveGUI(): void;
    static DeleteGUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

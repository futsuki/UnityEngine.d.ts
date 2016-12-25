declare namespace UnityEditor {
  class WindowLayout {
    // constructors
    constructor();
    // methods
    static Unmaximize(win: UnityEditor.EditorWindow): any;
    static AddSplitViewAndChildrenRecurse(splitview: UnityEditor.View, list: any): any;
    static SaveSplitViewAndChildren(splitview: UnityEditor.View, win: UnityEditor.EditorWindow, path: string): any;
    static Maximize(win: UnityEditor.EditorWindow): any;
    static MaximizePrepare(win: UnityEditor.EditorWindow): boolean;
    static MaximizePresent(win: UnityEditor.EditorWindow): any;
    static LoadWindowLayout(path: string, newProjectLayoutWasCreated: boolean): boolean;
    static CloseWindows(): any;
    static SaveWindowLayout(path: string): any;
    static EnsureMainWindowHasBeenLoaded(): any;
    static SaveGUI(): any;
    static DeleteGUI(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

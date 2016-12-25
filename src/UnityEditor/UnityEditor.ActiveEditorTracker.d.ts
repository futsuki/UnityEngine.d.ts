declare namespace UnityEditor {
  class ActiveEditorTracker {
    // constructors
    constructor();
    // methods
    Equals(o: any): boolean;
    GetHashCode(): number;
    Destroy(): any;
    GetVisible(index: number): number;
    SetVisible(index: number, visible: number): any;
    ClearDirty(): any;
    RebuildIfNecessary(): any;
    ForceRebuild(): any;
    VerifyModifiedMonoBehaviours(): any;
    static MakeCustomEditor(obj: any): UnityEditor.Editor;
    static HasCustomEditor(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly activeEditors: UnityEditor.Editor[];
    readonly isDirty: boolean;
    isLocked: boolean;
    inspectorMode: UnityEditor.InspectorMode;
    readonly hasComponentsWhichCannotBeMultiEdited: boolean;
    static readonly sharedTracker: UnityEditor.ActiveEditorTracker;
    // fields
  }
}

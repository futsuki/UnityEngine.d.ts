declare namespace UnityEditor {
  class ActiveEditorTracker extends System.Object {
    // constructors
    constructor();
    // methods
    Equals(o: any): boolean;
    GetHashCode(): number;
    Destroy(): void;
    GetVisible(index: number): number;
    SetVisible(index: number, visible: number): void;
    ClearDirty(): void;
    RebuildIfNecessary(): void;
    ForceRebuild(): void;
    VerifyModifiedMonoBehaviours(): void;
    static MakeCustomEditor(obj: UnityEngine.Object): UnityEditor.Editor;
    static HasCustomEditor(obj: UnityEngine.Object): boolean;
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

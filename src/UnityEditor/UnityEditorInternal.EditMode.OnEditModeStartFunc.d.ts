declare namespace UnityEditorInternal.EditMode {
  class OnEditModeStartFunc {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(editor: UnityEditor.Editor, mode: UnityEditorInternal.EditMode.SceneViewEditMode): void;
    BeginInvoke(editor: UnityEditor.Editor, mode: UnityEditorInternal.EditMode.SceneViewEditMode, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}

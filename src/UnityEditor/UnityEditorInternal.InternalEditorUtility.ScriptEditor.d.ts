declare namespace UnityEditorInternal.InternalEditorUtility {
  class ScriptEditor {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Internal: UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static MonoDevelop: UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static VisualStudio: UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static VisualStudioExpress: UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static VisualStudioCode: UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static Other: UnityEditorInternal.InternalEditorUtility.ScriptEditor;
  }
}

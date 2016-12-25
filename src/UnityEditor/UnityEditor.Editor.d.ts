declare namespace UnityEditor {
  class Editor {
    // constructors
    constructor();
    // methods
    static CreateEditor(targetObject: any): UnityEditor.Editor;
    static CreateEditor(targetObject: any, editorType: any): UnityEditor.Editor;
    static CreateEditor(targetObjects: any[], editorType: any): UnityEditor.Editor;
    static CreateEditor(targetObjects: any[]): UnityEditor.Editor;
    static CreateCachedEditor(targetObject: any, editorType: any, previousEditor: any): any;
    static CreateCachedEditor(targetObjects: any[], editorType: any, previousEditor: any): any;
    DrawDefaultInspector(): boolean;
    OnInspectorGUI(): any;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnPreviewSettings(): any;
    GetInfoString(): string;
    ReloadPreviewInstances(): any;
    DrawHeader(): any;
    DrawPreview(previewArea: any): any;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): any;
    MoveNextTarget(): boolean;
    ResetTarget(): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}

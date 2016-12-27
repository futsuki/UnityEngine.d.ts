declare namespace UnityEditor {
  class Editor extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    static CreateEditor(targetObject: UnityEngine.Object): UnityEditor.Editor;
    static CreateEditor(targetObject: UnityEngine.Object, editorType: any): UnityEditor.Editor;
    static CreateEditor(targetObjects: UnityEngine.Object[], editorType: any): UnityEditor.Editor;
    static CreateEditor(targetObjects: UnityEngine.Object[]): UnityEditor.Editor;
    static CreateCachedEditor(targetObject: UnityEngine.Object, editorType: any, previousEditor: any): void;
    static CreateCachedEditor(targetObjects: UnityEngine.Object[], editorType: any, previousEditor: any): void;
    DrawDefaultInspector(): boolean;
    OnInspectorGUI(): void;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
    ReloadPreviewInstances(): void;
    DrawHeader(): void;
    DrawPreview(previewArea: any): void;
    UseDefaultMargins(): boolean;
    Initialize(targets: UnityEngine.Object[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    // properties
    target: UnityEngine.Object;
    readonly targets: UnityEngine.Object[];
    readonly serializedObject: UnityEditor.SerializedObject;
    // fields
  }
}

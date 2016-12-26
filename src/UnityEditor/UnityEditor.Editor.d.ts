declare namespace UnityEditor {
  class Editor {
    // constructors
    constructor();
    // methods
    static CreateEditor(targetObject: any): UnityEditor.Editor;
    static CreateEditor(targetObject: any, editorType: any): UnityEditor.Editor;
    static CreateEditor(targetObjects: any[], editorType: any): UnityEditor.Editor;
    static CreateEditor(targetObjects: any[]): UnityEditor.Editor;
    static CreateCachedEditor(targetObject: any, editorType: any, previousEditor: any): void;
    static CreateCachedEditor(targetObjects: any[], editorType: any, previousEditor: any): void;
    DrawDefaultInspector(): boolean;
    OnInspectorGUI(): void;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
    ReloadPreviewInstances(): void;
    DrawHeader(): void;
    DrawPreview(previewArea: any): void;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    SetDirty(): void;
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

declare namespace UnityEditor {
  class BlendTreeInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    ClickDragFloat(position: any, value: number): number;
    ClickDragFloat(position: any, value: number, alignRight: boolean): number;
    EndDragChild(list: UnityEditorInternal.ReorderableList): void;
    AddButton(rect: any, list: UnityEditorInternal.ReorderableList): void;
    static DeleteBlendTreeDialog(toDelete: string): boolean;
    RemoveButton(list: UnityEditorInternal.ReorderableList): void;
    DrawChild(r: any, index: number, isActive: boolean, isFocused: boolean): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnDisable(): void;
    OnDestroy(): void;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
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

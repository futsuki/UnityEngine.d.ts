declare namespace UnityEditor {
  class BlendTreeInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnInspectorGUI(): any;
    ClickDragFloat(position: any, value: number): number;
    ClickDragFloat(position: any, value: number, alignRight: boolean): number;
    EndDragChild(list: UnityEditorInternal.ReorderableList): any;
    AddButton(rect: any, list: UnityEditorInternal.ReorderableList): any;
    static DeleteBlendTreeDialog(toDelete: string): boolean;
    RemoveButton(list: UnityEditorInternal.ReorderableList): any;
    DrawChild(r: any, index: number, isActive: boolean, isFocused: boolean): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnDisable(): any;
    OnDestroy(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
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

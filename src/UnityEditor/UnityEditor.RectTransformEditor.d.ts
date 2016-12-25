declare namespace UnityEditor {
  class RectTransformEditor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): any;
    static SetPivotSmart(rect: any, value: number, axis: number, smart: boolean, parentSpace: boolean): any;
    static SetAnchorSmart(rect: any, value: number, axis: number, isMax: boolean, smart: boolean): any;
    static SetAnchorSmart(rect: any, value: number, axis: number, isMax: boolean, smart: boolean, enforceExactValue: boolean): any;
    static SetAnchorSmart(rect: any, value: number, axis: number, isMax: boolean, smart: boolean, enforceExactValue: boolean, enforceMinNoLargerThanMax: boolean, moveTogether: boolean): any;
    DrawDefaultInspector(): boolean;
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

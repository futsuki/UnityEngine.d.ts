declare namespace UnityEditor {
  class SpriteInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    static BuildPreviewTexture(width: number, height: number, sprite: any, spriteRendererMaterial: any, isPolygon: boolean): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    static DrawPreview(r: any, frame: any, spriteRendererMaterial: any, isPolygon: boolean): void;
    GetInfoString(): string;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    GetPreviewTitle(): any;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
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

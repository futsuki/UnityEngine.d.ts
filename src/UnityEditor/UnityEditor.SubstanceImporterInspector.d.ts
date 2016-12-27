declare namespace UnityEditor {
  class SubstanceImporterInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(position: any, style: any): void;
    GetInfoString(): string;
    OnPreviewSettings(): void;
    InstanciatePrototype(prototypeName: any): void;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    // properties
    // fields
    previewDir: any;
    selectedMesh: number;
    lightMode: number;
  }
}

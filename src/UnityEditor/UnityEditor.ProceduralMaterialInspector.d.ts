declare namespace UnityEditor {
  class ProceduralMaterialInspector extends UnityEditor.MaterialEditor {
    // constructors
    constructor();
    // methods
    DisableReimportOnDisable(): void;
    ReimportSubstances(): void;
    Awake(): void;
    OnEnable(): void;
    ReimportSubstancesIfNeeded(): void;
    OnDisable(): void;
    UndoRedoPerformed(): void;
    OnInspectorGUI(): void;
    static ShowIsGenerating(mat: any): boolean;
    GetInfoString(): string;
    HasProceduralTextureProperties(material: any): boolean;
    static ResetSubstance(command: UnityEditor.MenuCommand): void;
    static ExportBitmapsAlphaRemap(command: UnityEditor.MenuCommand): void;
    static ExportBitmapsNoAlphaRemap(command: UnityEditor.MenuCommand): void;
    static ExportPreset(command: UnityEditor.MenuCommand): void;
    BuildTargetList(): void;
    ShowTextureSizeGUI(): void;
    OnPreviewGUI(r: any, background: any): void;
    InputsGUI(): void;
    // properties
    // fields
  }
}

declare namespace UnityEditor {
  class TextureImporterInspector extends UnityEditor.AssetImporterInspector {
    // constructors
    constructor();
    // methods
    OnDisable(): void;
    OnDisable(): void;
    static IsCompressedDXTTextureFormat(format: UnityEditor.TextureImporterFormat): boolean;
    OnEnable(): void;
    OnInspectorGUI(): void;
    static GetBuildPlayerValidPlatforms(): UnityEditor.BuildPlayerWindow.BuildPlatform[];
    BuildTargetList(): void;
    static SelectMainAssets(targets: UnityEngine.Object[]): void;
    // properties
    // fields
    static s_DefaultPlatformName: string;
  }
}

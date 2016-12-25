declare namespace UnityEditor.TextureImporterInspector {
  class TextureInspectorGUIElement {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static PowerOfTwo: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static Readable: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static AlphaHandling: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static ColorSpace: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static MipMaps: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static NormalMap: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static Sprite: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static Cookie: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static CubeMapConvolution: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
    static CubeMapping: UnityEditor.TextureImporterInspector.TextureInspectorGUIElement;
  }
}

declare namespace UnityEditor {
  class GameObjectInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    static SetEnabledRecursive(go: any, enabled: boolean): void;
    ReloadPreviewInstances(): void;
    OnDestroy(): void;
    static HasRenderableParts(go: any): boolean;
    static GetRenderableBoundsRecurse(bounds: any, go: any): void;
    static GetRenderableCenterRecurse(go: any, minDepth: number, maxDepth: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    RenderStaticPreview(assetPath: string, subAssets: UnityEngine.Object[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    OnSceneDrag(sceneView: UnityEditor.SceneView): void;
    // properties
    // fields
    static dragObject: any;
  }
}

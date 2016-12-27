declare namespace UnityEditor {
  class EditorWrapper extends System.Object {
    // constructors
    protected constructor();
    // methods
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnPreviewGUI(position: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    static Make(obj: UnityEngine.Object, requirements: UnityEditor.EditorFeatures): UnityEditor.EditorWrapper;
    Dispose(): void;
    // properties
    readonly name: string;
    // fields
    OnSceneDrag: ((sceneView: UnityEditor.SceneView) => void);
  }
}

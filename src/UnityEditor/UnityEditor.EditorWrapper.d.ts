declare namespace UnityEditor {
  class EditorWrapper {
    // constructors
    private constructor();
    // methods
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnPreviewGUI(position: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    static Make(obj: any, requirements: UnityEditor.EditorFeatures): UnityEditor.EditorWrapper;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    // fields
    OnSceneDrag: UnityEditor.EditorWrapper.VoidDelegate;
  }
}

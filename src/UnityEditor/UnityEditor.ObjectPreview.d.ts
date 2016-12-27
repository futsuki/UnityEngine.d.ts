declare namespace UnityEditor {
  class ObjectPreview extends System.Object {
    // constructors
    constructor();
    // methods
    Initialize(targets: UnityEngine.Object[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
    DrawPreview(previewArea: any): void;
    ReloadPreviewInstances(): void;
    // properties
    readonly target: UnityEngine.Object;
    // fields
  }
}

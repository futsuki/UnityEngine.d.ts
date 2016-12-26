declare namespace UnityEditor {
  class IPreviewable {
    // constructors
    private constructor();
    // methods
    Initialize(targets: any[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    DrawPreview(previewArea: any): void;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
    ReloadPreviewInstances(): void;
    // properties
    readonly target: any;
    // fields
  }
}

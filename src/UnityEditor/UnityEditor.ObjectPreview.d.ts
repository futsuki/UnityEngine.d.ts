declare namespace UnityEditor {
  class ObjectPreview {
    // constructors
    constructor();
    // methods
    Initialize(targets: any[]): void;
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly target: any;
    // fields
  }
}

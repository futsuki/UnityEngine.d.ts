declare namespace UnityEditor {
  class ObjectPreview {
    // constructors
    constructor();
    // methods
    Initialize(targets: any[]): any;
    MoveNextTarget(): boolean;
    ResetTarget(): any;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    OnPreviewGUI(r: any, background: any): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnPreviewSettings(): any;
    GetInfoString(): string;
    DrawPreview(previewArea: any): any;
    ReloadPreviewInstances(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly target: any;
    // fields
  }
}

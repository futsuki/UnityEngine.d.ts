declare namespace UnityEditorInternal.VersionControl {
  class ProjectHooks {
    // constructors
    constructor();
    // methods
    static OnProjectWindowItem(guid: string, drawRect: any): void;
    static GetOverlayRect(drawRect: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

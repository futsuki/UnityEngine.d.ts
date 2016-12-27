declare namespace UnityEditorInternal {
  class ComponentUtility {
    // constructors
    constructor();
    // methods
    static MoveComponentUp(component: any): boolean;
    static MoveComponentDown(component: any): boolean;
    static CopyComponent(component: any): boolean;
    static PasteComponentValues(component: any): boolean;
    static PasteComponentAsNew(go: any): boolean;
    static DestroyComponentsMatching(dst: any, componentFilter: ((any) => boolean)): void;
    static ReplaceComponentsIfDifferent(src: any, dst: any, componentFilter: ((any) => boolean)): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

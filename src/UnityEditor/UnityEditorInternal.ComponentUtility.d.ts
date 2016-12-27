declare namespace UnityEditorInternal {
  class ComponentUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static MoveComponentUp(component: any): boolean;
    static MoveComponentDown(component: any): boolean;
    static CopyComponent(component: any): boolean;
    static PasteComponentValues(component: any): boolean;
    static PasteComponentAsNew(go: any): boolean;
    static DestroyComponentsMatching(dst: any, componentFilter: ((c: any) => boolean)): void;
    static ReplaceComponentsIfDifferent(src: any, dst: any, componentFilter: ((c: any) => boolean)): void;
    // properties
    // fields
  }
}

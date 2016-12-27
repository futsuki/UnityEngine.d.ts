declare namespace UnityEditorInternal {
  class AnimationWindowHierarchyNode extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(instanceID: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, animatableObjectType: any, propertyName: string, path: string, displayName: string);
    // methods
    // properties
    // fields
    path: string;
    animatableObjectType: any;
    propertyName: string;
    binding: any;
    curves: UnityEditorInternal.AnimationWindowCurve[];
    topPixel: any;
    indent: number;
  }
}

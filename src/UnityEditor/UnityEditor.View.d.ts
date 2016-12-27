declare namespace UnityEditor {
  class View extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    IndexOfChild(child: UnityEditor.View): number;
    OnDestroy(): void;
    AddChild(child: UnityEditor.View): void;
    AddChild(child: UnityEditor.View, idx: number): void;
    RemoveChild(child: UnityEditor.View): void;
    RemoveChild(idx: number): void;
    // properties
    readonly minSize: any;
    readonly maxSize: any;
    readonly allChildren: UnityEditor.View[];
    position: any;
    readonly windowPosition: any;
    readonly screenPosition: any;
    readonly window: UnityEditor.ContainerWindow;
    readonly parent: UnityEditor.View;
    readonly children: UnityEditor.View[];
    // fields
  }
}

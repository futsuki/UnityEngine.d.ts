declare namespace UnityEditor {
  class View {
    // constructors
    constructor();
    // methods
    IndexOfChild(child: UnityEditor.View): number;
    OnDestroy(): void;
    AddChild(child: UnityEditor.View): void;
    AddChild(child: UnityEditor.View, idx: number): void;
    RemoveChild(child: UnityEditor.View): void;
    RemoveChild(idx: number): void;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    name: string;
    hideFlags: any;
    // fields
  }
}

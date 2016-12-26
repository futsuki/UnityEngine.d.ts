declare namespace UnityEditor {
  class AnimationEventTimeLine {
    // constructors
    constructor(owner: UnityEditor.EditorWindow);
    // methods
    AddEvent(time: number, rootGameObject: any, animationClip: any): void;
    DeselectAll(): void;
    EventLineGUI(rect: any, state: UnityEditorInternal.AnimationWindowState): void;
    DrawInstantTooltip(position: any): void;
    EventLineContextMenuAdd(obj: any): void;
    EventLineContextMenuEdit(obj: any): void;
    EventLineContextMenuDelete(obj: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

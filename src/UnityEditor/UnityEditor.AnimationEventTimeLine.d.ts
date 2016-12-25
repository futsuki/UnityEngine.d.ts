declare namespace UnityEditor {
  class AnimationEventTimeLine {
    // constructors
    constructor(owner: UnityEditor.EditorWindow);
    // methods
    AddEvent(time: number, rootGameObject: any, animationClip: any): any;
    DeselectAll(): any;
    EventLineGUI(rect: any, state: UnityEditorInternal.AnimationWindowState): any;
    DrawInstantTooltip(position: any): any;
    EventLineContextMenuAdd(obj: any): any;
    EventLineContextMenuEdit(obj: any): any;
    EventLineContextMenuDelete(obj: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

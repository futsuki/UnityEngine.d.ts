declare namespace UnityEditor {
  class EventManipulationHandler {
    // constructors
    constructor(timeArea: UnityEditor.TimeArea);
    // methods
    SelectEvent(events: any[], index: number, clipInfo: UnityEditor.AnimationClipInfoProperties): void;
    UpdateEvent(info: UnityEditor.AnimationClipInfoProperties): void;
    HandleEventManipulation(rect: any, events: any, clipInfo: UnityEditor.AnimationClipInfoProperties): boolean;
    EventLineContextMenuAdd(obj: any): void;
    EventLineContextMenuDelete(obj: any): void;
    Draw(window: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

declare namespace UnityEditor {
  class EventManipulationHandler {
    // constructors
    constructor(timeArea: UnityEditor.TimeArea);
    // methods
    SelectEvent(events: any[], index: number, clipInfo: UnityEditor.AnimationClipInfoProperties): any;
    UpdateEvent(info: UnityEditor.AnimationClipInfoProperties): any;
    HandleEventManipulation(rect: any, events: any, clipInfo: UnityEditor.AnimationClipInfoProperties): boolean;
    EventLineContextMenuAdd(obj: any): any;
    EventLineContextMenuDelete(obj: any): any;
    Draw(window: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

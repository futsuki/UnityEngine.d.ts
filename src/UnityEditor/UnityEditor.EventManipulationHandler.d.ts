declare namespace UnityEditor {
  class EventManipulationHandler extends System.Object {
    // constructors
    constructor(timeArea: UnityEditor.TimeArea);
    // methods
    SelectEvent(events: any[], index: number, clipInfo: UnityEditor.AnimationClipInfoProperties): void;
    UpdateEvent(info: UnityEditor.AnimationClipInfoProperties): void;
    HandleEventManipulation(rect: any, events: any, clipInfo: UnityEditor.AnimationClipInfoProperties): boolean;
    EventLineContextMenuAdd(obj: any): void;
    EventLineContextMenuDelete(obj: any): void;
    Draw(window: any): void;
    // properties
    // fields
  }
}

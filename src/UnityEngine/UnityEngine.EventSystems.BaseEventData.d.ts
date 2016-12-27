declare namespace UnityEngine.EventSystems {
  class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    // properties
    readonly currentInputModule: UnityEngine.EventSystems.BaseInputModule;
    selectedObject: UnityEngine.GameObject;
    // fields
  }
}

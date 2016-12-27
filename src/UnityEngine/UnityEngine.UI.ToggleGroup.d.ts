declare namespace UnityEngine.UI {
  class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    NotifyToggleOn(toggle: UnityEngine.UI.Toggle): void;
    UnregisterToggle(toggle: UnityEngine.UI.Toggle): void;
    RegisterToggle(toggle: UnityEngine.UI.Toggle): void;
    AnyTogglesOn(): boolean;
    ActiveToggles(): any;
    SetAllTogglesOff(): void;
    // properties
    allowSwitchOff: boolean;
    // fields
  }
}

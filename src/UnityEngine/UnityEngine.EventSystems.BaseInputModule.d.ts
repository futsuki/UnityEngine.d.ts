declare namespace UnityEngine.EventSystems {
  class BaseInputModule extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    Process(): void;
    IsPointerOverGameObject(pointerId: number): boolean;
    ShouldActivateModule(): boolean;
    DeactivateModule(): void;
    ActivateModule(): void;
    UpdateModule(): void;
    IsModuleSupported(): boolean;
    // properties
    readonly input: UnityEngine.EventSystems.BaseInput;
    // fields
  }
}

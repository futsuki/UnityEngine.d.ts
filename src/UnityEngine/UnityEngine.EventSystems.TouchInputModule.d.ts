declare namespace UnityEngine.EventSystems {
  class TouchInputModule extends UnityEngine.EventSystems.PointerInputModule {
    // constructors
    protected constructor();
    // methods
    UpdateModule(): void;
    IsModuleSupported(): boolean;
    ShouldActivateModule(): boolean;
    Process(): void;
    DeactivateModule(): void;
    ToString(): string;
    // properties
    allowActivationOnStandalone: boolean;
    forceModuleActive: boolean;
    // fields
  }
}

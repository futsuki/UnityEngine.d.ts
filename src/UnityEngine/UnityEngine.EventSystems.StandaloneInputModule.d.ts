declare namespace UnityEngine.EventSystems {
  class StandaloneInputModule extends UnityEngine.EventSystems.PointerInputModule {
    // constructors
    protected constructor();
    // methods
    UpdateModule(): void;
    IsModuleSupported(): boolean;
    ShouldActivateModule(): boolean;
    ActivateModule(): void;
    DeactivateModule(): void;
    Process(): void;
    // properties
    readonly inputMode: UnityEngine.EventSystems.StandaloneInputModule.InputMode;
    allowActivationOnMobileDevice: boolean;
    forceModuleActive: boolean;
    inputActionsPerSecond: number;
    repeatDelay: number;
    horizontalAxis: string;
    verticalAxis: string;
    submitButton: string;
    cancelButton: string;
    // fields
  }
}

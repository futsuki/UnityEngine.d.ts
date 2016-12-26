declare namespace UnityEngine.EventSystems {
  class RaycasterManager {
    // constructors
    private constructor();
    // methods
    static AddRaycaster(baseRaycaster: UnityEngine.EventSystems.BaseRaycaster): void;
    static GetRaycasters(): any;
    static RemoveRaycasters(baseRaycaster: UnityEngine.EventSystems.BaseRaycaster): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceState {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly pressed: boolean;
    readonly properties: UnityEngine.VR.WSA.Input.InteractionSourceProperties;
    readonly source: UnityEngine.VR.WSA.Input.InteractionSource;
    readonly headRay: UnityEngine.Ray;
    // fields
  }
}

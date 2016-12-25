declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceKind {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Other: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    static Hand: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    static Voice: UnityEngine.VR.WSA.Input.InteractionSourceKind;
    static Controller: UnityEngine.VR.WSA.Input.InteractionSourceKind;
  }
}

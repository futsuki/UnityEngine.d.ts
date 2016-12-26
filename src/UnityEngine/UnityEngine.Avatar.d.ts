declare namespace UnityEngine {
  class Avatar {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly isValid: boolean;
    readonly isHuman: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}

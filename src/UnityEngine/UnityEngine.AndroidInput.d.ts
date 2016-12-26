declare namespace UnityEngine {
  class AndroidInput {
    // constructors
    private constructor();
    // methods
    static GetSecondaryTouch(index: number): UnityEngine.Touch;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly touchCountSecondary: number;
    static readonly secondaryTouchEnabled: boolean;
    static readonly secondaryTouchWidth: number;
    static readonly secondaryTouchHeight: number;
    // fields
  }
}

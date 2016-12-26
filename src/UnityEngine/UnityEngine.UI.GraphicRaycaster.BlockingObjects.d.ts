declare namespace UnityEngine.UI.GraphicRaycaster {
  class BlockingObjects {
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
    static None: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    static TwoD: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    static ThreeD: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    static All: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
  }
}

declare namespace UnityEngine {
  class CameraClearFlags {
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
    static Skybox: UnityEngine.CameraClearFlags;
    static Color: UnityEngine.CameraClearFlags;
    static SolidColor: UnityEngine.CameraClearFlags;
    static Depth: UnityEngine.CameraClearFlags;
    static Nothing: UnityEngine.CameraClearFlags;
  }
}

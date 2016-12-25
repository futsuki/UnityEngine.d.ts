declare namespace UnityEngine.Rendering {
  class AmbientMode {
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
    static Skybox: UnityEngine.Rendering.AmbientMode;
    static Trilight: UnityEngine.Rendering.AmbientMode;
    static Flat: UnityEngine.Rendering.AmbientMode;
    static Custom: UnityEngine.Rendering.AmbientMode;
  }
}

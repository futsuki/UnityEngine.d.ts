declare namespace UnityEngine {
  class CameraType {
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
    static Game: UnityEngine.CameraType;
    static SceneView: UnityEngine.CameraType;
    static Preview: UnityEngine.CameraType;
    static VR: UnityEngine.CameraType;
  }
}

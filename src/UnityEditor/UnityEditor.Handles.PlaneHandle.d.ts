declare namespace UnityEditor.Handles {
  class PlaneHandle {
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
    static xzPlane: UnityEditor.Handles.PlaneHandle;
    static xyPlane: UnityEditor.Handles.PlaneHandle;
    static yzPlane: UnityEditor.Handles.PlaneHandle;
  }
}

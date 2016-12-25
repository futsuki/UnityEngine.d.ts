declare namespace UnityEditor {
  class LookDevOperationType {
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
    static None: UnityEditor.LookDevOperationType;
    static GizmoTranslation: UnityEditor.LookDevOperationType;
    static GizmoRotationZone1: UnityEditor.LookDevOperationType;
    static GizmoRotationZone2: UnityEditor.LookDevOperationType;
    static GizmoAll: UnityEditor.LookDevOperationType;
    static BlendFactor: UnityEditor.LookDevOperationType;
    static RotateLight: UnityEditor.LookDevOperationType;
    static RotateEnvironment: UnityEditor.LookDevOperationType;
  }
}

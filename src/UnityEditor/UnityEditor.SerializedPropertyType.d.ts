declare namespace UnityEditor {
  class SerializedPropertyType {
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
    static Generic: UnityEditor.SerializedPropertyType;
    static Integer: UnityEditor.SerializedPropertyType;
    static Boolean: UnityEditor.SerializedPropertyType;
    static Float: UnityEditor.SerializedPropertyType;
    static String: UnityEditor.SerializedPropertyType;
    static Color: UnityEditor.SerializedPropertyType;
    static ObjectReference: UnityEditor.SerializedPropertyType;
    static LayerMask: UnityEditor.SerializedPropertyType;
    static Enum: UnityEditor.SerializedPropertyType;
    static Vector2: UnityEditor.SerializedPropertyType;
    static Vector3: UnityEditor.SerializedPropertyType;
    static Vector4: UnityEditor.SerializedPropertyType;
    static Rect: UnityEditor.SerializedPropertyType;
    static ArraySize: UnityEditor.SerializedPropertyType;
    static Character: UnityEditor.SerializedPropertyType;
    static AnimationCurve: UnityEditor.SerializedPropertyType;
    static Bounds: UnityEditor.SerializedPropertyType;
    static Gradient: UnityEditor.SerializedPropertyType;
    static Quaternion: UnityEditor.SerializedPropertyType;
  }
}

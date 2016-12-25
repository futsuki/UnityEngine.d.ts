declare namespace UnityEngine {
  class ProceduralPropertyType {
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
    static Boolean: UnityEngine.ProceduralPropertyType;
    static Float: UnityEngine.ProceduralPropertyType;
    static Vector2: UnityEngine.ProceduralPropertyType;
    static Vector3: UnityEngine.ProceduralPropertyType;
    static Vector4: UnityEngine.ProceduralPropertyType;
    static Color3: UnityEngine.ProceduralPropertyType;
    static Color4: UnityEngine.ProceduralPropertyType;
    static Enum: UnityEngine.ProceduralPropertyType;
    static Texture: UnityEngine.ProceduralPropertyType;
  }
}

declare namespace UnityEditor.Animations {
  class BlendTreeType {
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
    static Simple1D: UnityEditor.Animations.BlendTreeType;
    static SimpleDirectional2D: UnityEditor.Animations.BlendTreeType;
    static FreeformDirectional2D: UnityEditor.Animations.BlendTreeType;
    static FreeformCartesian2D: UnityEditor.Animations.BlendTreeType;
    static Direct: UnityEditor.Animations.BlendTreeType;
  }
}

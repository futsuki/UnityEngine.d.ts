declare namespace UnityEditor.MaterialProperty {
  class PropFlags {
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
    static None: UnityEditor.MaterialProperty.PropFlags;
    static HideInInspector: UnityEditor.MaterialProperty.PropFlags;
    static PerRendererData: UnityEditor.MaterialProperty.PropFlags;
    static NoScaleOffset: UnityEditor.MaterialProperty.PropFlags;
    static Normal: UnityEditor.MaterialProperty.PropFlags;
    static HDR: UnityEditor.MaterialProperty.PropFlags;
  }
}

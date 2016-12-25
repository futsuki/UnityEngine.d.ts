declare namespace UnityEditorInternal.EditMode {
  class SceneViewEditMode {
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
    static None: UnityEditorInternal.EditMode.SceneViewEditMode;
    static Collider: UnityEditorInternal.EditMode.SceneViewEditMode;
    static Cloth: UnityEditorInternal.EditMode.SceneViewEditMode;
    static ReflectionProbeBox: UnityEditorInternal.EditMode.SceneViewEditMode;
    static ReflectionProbeOrigin: UnityEditorInternal.EditMode.SceneViewEditMode;
    static LightProbeProxyVolumeBox: UnityEditorInternal.EditMode.SceneViewEditMode;
    static LightProbeProxyVolumeOrigin: UnityEditorInternal.EditMode.SceneViewEditMode;
    static LightProbeGroup: UnityEditorInternal.EditMode.SceneViewEditMode;
  }
}

declare namespace UnityEditor.ShapeModuleUI {
  class ShapeTypes {
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
    static Sphere: UnityEditor.ShapeModuleUI.ShapeTypes;
    static SphereShell: UnityEditor.ShapeModuleUI.ShapeTypes;
    static Hemisphere: UnityEditor.ShapeModuleUI.ShapeTypes;
    static HemisphereShell: UnityEditor.ShapeModuleUI.ShapeTypes;
    static Cone: UnityEditor.ShapeModuleUI.ShapeTypes;
    static Box: UnityEditor.ShapeModuleUI.ShapeTypes;
    static Mesh: UnityEditor.ShapeModuleUI.ShapeTypes;
    static ConeShell: UnityEditor.ShapeModuleUI.ShapeTypes;
    static ConeVolume: UnityEditor.ShapeModuleUI.ShapeTypes;
    static ConeVolumeShell: UnityEditor.ShapeModuleUI.ShapeTypes;
    static Circle: UnityEditor.ShapeModuleUI.ShapeTypes;
    static CircleEdge: UnityEditor.ShapeModuleUI.ShapeTypes;
    static SingleSidedEdge: UnityEditor.ShapeModuleUI.ShapeTypes;
    static MeshRenderer: UnityEditor.ShapeModuleUI.ShapeTypes;
    static SkinnedMeshRenderer: UnityEditor.ShapeModuleUI.ShapeTypes;
    static BoxShell: UnityEditor.ShapeModuleUI.ShapeTypes;
    static BoxEdge: UnityEditor.ShapeModuleUI.ShapeTypes;
  }
}

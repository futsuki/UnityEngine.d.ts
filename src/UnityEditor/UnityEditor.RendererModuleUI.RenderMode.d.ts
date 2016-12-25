declare namespace UnityEditor.RendererModuleUI {
  class RenderMode {
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
    static Billboard: UnityEditor.RendererModuleUI.RenderMode;
    static Stretch3D: UnityEditor.RendererModuleUI.RenderMode;
    static BillboardFixedHorizontal: UnityEditor.RendererModuleUI.RenderMode;
    static BillboardFixedVertical: UnityEditor.RendererModuleUI.RenderMode;
    static Mesh: UnityEditor.RendererModuleUI.RenderMode;
    static None: UnityEditor.RendererModuleUI.RenderMode;
  }
}

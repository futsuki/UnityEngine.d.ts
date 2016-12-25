declare namespace UnityEditor.AvatarPreview {
  class ViewTool {
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
    static None: UnityEditor.AvatarPreview.ViewTool;
    static Pan: UnityEditor.AvatarPreview.ViewTool;
    static Zoom: UnityEditor.AvatarPreview.ViewTool;
    static Orbit: UnityEditor.AvatarPreview.ViewTool;
  }
}

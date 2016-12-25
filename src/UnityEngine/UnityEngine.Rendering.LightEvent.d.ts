declare namespace UnityEngine.Rendering {
  class LightEvent {
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
    static BeforeShadowMap: UnityEngine.Rendering.LightEvent;
    static AfterShadowMap: UnityEngine.Rendering.LightEvent;
    static BeforeScreenspaceMask: UnityEngine.Rendering.LightEvent;
    static AfterScreenspaceMask: UnityEngine.Rendering.LightEvent;
  }
}

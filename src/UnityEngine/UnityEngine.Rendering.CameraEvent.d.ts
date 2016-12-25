declare namespace UnityEngine.Rendering {
  class CameraEvent {
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
    static BeforeDepthTexture: UnityEngine.Rendering.CameraEvent;
    static AfterDepthTexture: UnityEngine.Rendering.CameraEvent;
    static BeforeDepthNormalsTexture: UnityEngine.Rendering.CameraEvent;
    static AfterDepthNormalsTexture: UnityEngine.Rendering.CameraEvent;
    static BeforeGBuffer: UnityEngine.Rendering.CameraEvent;
    static AfterGBuffer: UnityEngine.Rendering.CameraEvent;
    static BeforeLighting: UnityEngine.Rendering.CameraEvent;
    static AfterLighting: UnityEngine.Rendering.CameraEvent;
    static BeforeFinalPass: UnityEngine.Rendering.CameraEvent;
    static AfterFinalPass: UnityEngine.Rendering.CameraEvent;
    static BeforeForwardOpaque: UnityEngine.Rendering.CameraEvent;
    static AfterForwardOpaque: UnityEngine.Rendering.CameraEvent;
    static BeforeImageEffectsOpaque: UnityEngine.Rendering.CameraEvent;
    static AfterImageEffectsOpaque: UnityEngine.Rendering.CameraEvent;
    static BeforeSkybox: UnityEngine.Rendering.CameraEvent;
    static AfterSkybox: UnityEngine.Rendering.CameraEvent;
    static BeforeForwardAlpha: UnityEngine.Rendering.CameraEvent;
    static AfterForwardAlpha: UnityEngine.Rendering.CameraEvent;
    static BeforeImageEffects: UnityEngine.Rendering.CameraEvent;
    static AfterImageEffects: UnityEngine.Rendering.CameraEvent;
    static AfterEverything: UnityEngine.Rendering.CameraEvent;
    static BeforeReflections: UnityEngine.Rendering.CameraEvent;
    static AfterReflections: UnityEngine.Rendering.CameraEvent;
  }
}

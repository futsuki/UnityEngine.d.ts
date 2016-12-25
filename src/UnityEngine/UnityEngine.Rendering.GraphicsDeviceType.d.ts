declare namespace UnityEngine.Rendering {
  class GraphicsDeviceType {
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
    static OpenGL2: UnityEngine.Rendering.GraphicsDeviceType;
    static Direct3D9: UnityEngine.Rendering.GraphicsDeviceType;
    static Direct3D11: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStation3: UnityEngine.Rendering.GraphicsDeviceType;
    static Null: UnityEngine.Rendering.GraphicsDeviceType;
    static Xbox360: UnityEngine.Rendering.GraphicsDeviceType;
    static OpenGLES2: UnityEngine.Rendering.GraphicsDeviceType;
    static OpenGLES3: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStationVita: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStation4: UnityEngine.Rendering.GraphicsDeviceType;
    static XboxOne: UnityEngine.Rendering.GraphicsDeviceType;
    static PlayStationMobile: UnityEngine.Rendering.GraphicsDeviceType;
    static Metal: UnityEngine.Rendering.GraphicsDeviceType;
    static OpenGLCore: UnityEngine.Rendering.GraphicsDeviceType;
    static Direct3D12: UnityEngine.Rendering.GraphicsDeviceType;
    static N3DS: UnityEngine.Rendering.GraphicsDeviceType;
    static Vulkan: UnityEngine.Rendering.GraphicsDeviceType;
  }
}

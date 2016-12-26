declare namespace UnityEngine.Rendering {
  class GraphicsSettings {
    // constructors
    constructor();
    // methods
    static SetShaderMode(type: UnityEngine.Rendering.BuiltinShaderType, mode: UnityEngine.Rendering.BuiltinShaderMode): void;
    static GetShaderMode(type: UnityEngine.Rendering.BuiltinShaderType): UnityEngine.Rendering.BuiltinShaderMode;
    static SetCustomShader(type: UnityEngine.Rendering.BuiltinShaderType, shader: UnityEngine.Shader): void;
    static GetCustomShader(type: UnityEngine.Rendering.BuiltinShaderType): UnityEngine.Shader;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}

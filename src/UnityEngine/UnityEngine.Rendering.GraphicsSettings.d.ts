declare namespace UnityEngine.Rendering {
  class GraphicsSettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static SetShaderMode(type: UnityEngine.Rendering.BuiltinShaderType, mode: UnityEngine.Rendering.BuiltinShaderMode): void;
    static GetShaderMode(type: UnityEngine.Rendering.BuiltinShaderType): UnityEngine.Rendering.BuiltinShaderMode;
    static SetCustomShader(type: UnityEngine.Rendering.BuiltinShaderType, shader: UnityEngine.Shader): void;
    static GetCustomShader(type: UnityEngine.Rendering.BuiltinShaderType): UnityEngine.Shader;
    // properties
    // fields
  }
}

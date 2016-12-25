declare namespace UnityEditorInternal {
  class ShaderProperties {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    floats: UnityEditorInternal.ShaderFloatInfo[];
    vectors: UnityEditorInternal.ShaderVectorInfo[];
    matrices: UnityEditorInternal.ShaderMatrixInfo[];
    textures: UnityEditorInternal.ShaderTextureInfo[];
  }
}

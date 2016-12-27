declare namespace UnityEditor {
  class ShaderUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static GetPropertyCount(s: any): number;
    static GetPropertyDescription(s: any, propertyIdx: number): string;
    static GetPropertyName(s: any, propertyIdx: number): string;
    static GetPropertyType(s: any, propertyIdx: number): UnityEditor.ShaderUtil.ShaderPropertyType;
    static GetRangeLimits(s: any, propertyIdx: number, defminmax: number): number;
    static GetTexDim(s: any, propertyIdx: number): any;
    static IsShaderPropertyHidden(s: any, propertyIdx: number): boolean;
    static CreateShaderAsset(source: string): any;
    static UpdateShaderAsset(shader: any, source: string): void;
    // properties
    static readonly hardwareSupportsRectRenderTexture: boolean;
    // fields
  }
}

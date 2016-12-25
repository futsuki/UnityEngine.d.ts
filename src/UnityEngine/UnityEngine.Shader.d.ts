declare namespace UnityEngine {
  class Shader {
    // constructors
    constructor();
    // methods
    static Find(name: string): UnityEngine.Shader;
    static EnableKeyword(keyword: string): any;
    static DisableKeyword(keyword: string): any;
    static IsKeywordEnabled(keyword: string): boolean;
    static SetGlobalVector(propertyName: string, vec: UnityEngine.Vector4): any;
    static SetGlobalVector(nameID: number, vec: UnityEngine.Vector4): any;
    static SetGlobalColor(propertyName: string, color: UnityEngine.Color): any;
    static SetGlobalColor(nameID: number, color: UnityEngine.Color): any;
    static SetGlobalFloat(propertyName: string, value: number): any;
    static SetGlobalFloat(nameID: number, value: number): any;
    static SetGlobalInt(propertyName: string, value: number): any;
    static SetGlobalInt(nameID: number, value: number): any;
    static SetGlobalMatrix(propertyName: string, mat: UnityEngine.Matrix4x4): any;
    static SetGlobalMatrix(nameID: number, mat: UnityEngine.Matrix4x4): any;
    static SetGlobalTexture(propertyName: string, tex: UnityEngine.Texture): any;
    static SetGlobalTexture(nameID: number, tex: UnityEngine.Texture): any;
    static SetGlobalFloatArray(name: string, values: any): any;
    static SetGlobalFloatArray(nameID: number, values: any): any;
    static SetGlobalFloatArray(propertyName: string, values: number[]): any;
    static SetGlobalFloatArray(nameID: number, values: number[]): any;
    static SetGlobalVectorArray(name: string, values: any): any;
    static SetGlobalVectorArray(nameID: number, values: any): any;
    static SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): any;
    static SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): any;
    static SetGlobalMatrixArray(name: string, values: any): any;
    static SetGlobalMatrixArray(nameID: number, values: any): any;
    static SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): any;
    static SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): any;
    static SetGlobalBuffer(name: string, buffer: UnityEngine.ComputeBuffer): any;
    static SetGlobalBuffer(nameID: number, buffer: UnityEngine.ComputeBuffer): any;
    static GetGlobalFloat(name: string): number;
    static GetGlobalFloat(nameID: number): number;
    static GetGlobalInt(name: string): number;
    static GetGlobalInt(nameID: number): number;
    static GetGlobalVector(name: string): UnityEngine.Vector4;
    static GetGlobalVector(nameID: number): UnityEngine.Vector4;
    static GetGlobalColor(name: string): UnityEngine.Color;
    static GetGlobalColor(nameID: number): UnityEngine.Color;
    static GetGlobalMatrix(name: string): UnityEngine.Matrix4x4;
    static GetGlobalMatrix(nameID: number): UnityEngine.Matrix4x4;
    static GetGlobalTexture(name: string): UnityEngine.Texture;
    static GetGlobalTexture(nameID: number): UnityEngine.Texture;
    static GetGlobalFloatArray(name: string, values: any): any;
    static GetGlobalFloatArray(nameID: number, values: any): any;
    static GetGlobalFloatArray(name: string): number[];
    static GetGlobalFloatArray(nameID: number): number[];
    static GetGlobalVectorArray(name: string, values: any): any;
    static GetGlobalVectorArray(nameID: number, values: any): any;
    static GetGlobalVectorArray(name: string): UnityEngine.Vector4[];
    static GetGlobalVectorArray(nameID: number): UnityEngine.Vector4[];
    static GetGlobalMatrixArray(name: string, values: any): any;
    static GetGlobalMatrixArray(nameID: number, values: any): any;
    static GetGlobalMatrixArray(name: string): UnityEngine.Matrix4x4[];
    static GetGlobalMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    static PropertyToID(name: string): number;
    static WarmupAllShaders(): any;
    static SetGlobalTexGenMode(propertyName: string, mode: UnityEngine.TexGenMode): any;
    static SetGlobalTextureMatrixName(propertyName: string, matrixName: string): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly isSupported: boolean;
    maximumLOD: number;
    static globalMaximumLOD: number;
    readonly renderQueue: number;
    static globalShaderHardwareTier: UnityEngine.Rendering.ShaderHardwareTier;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}

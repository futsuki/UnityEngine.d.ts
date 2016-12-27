declare namespace UnityEngine {
  class Shader extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static Find(name: string): UnityEngine.Shader;
    static EnableKeyword(keyword: string): void;
    static DisableKeyword(keyword: string): void;
    static IsKeywordEnabled(keyword: string): boolean;
    static SetGlobalVector(propertyName: string, vec: UnityEngine.Vector4): void;
    static SetGlobalVector(nameID: number, vec: UnityEngine.Vector4): void;
    static SetGlobalColor(propertyName: string, color: UnityEngine.Color): void;
    static SetGlobalColor(nameID: number, color: UnityEngine.Color): void;
    static SetGlobalFloat(propertyName: string, value: number): void;
    static SetGlobalFloat(nameID: number, value: number): void;
    static SetGlobalInt(propertyName: string, value: number): void;
    static SetGlobalInt(nameID: number, value: number): void;
    static SetGlobalMatrix(propertyName: string, mat: UnityEngine.Matrix4x4): void;
    static SetGlobalMatrix(nameID: number, mat: UnityEngine.Matrix4x4): void;
    static SetGlobalTexture(propertyName: string, tex: UnityEngine.Texture): void;
    static SetGlobalTexture(nameID: number, tex: UnityEngine.Texture): void;
    static SetGlobalFloatArray(name: string, values: number[]): void;
    static SetGlobalFloatArray(nameID: number, values: number[]): void;
    static SetGlobalFloatArray(propertyName: string, values: number[]): void;
    static SetGlobalFloatArray(nameID: number, values: number[]): void;
    static SetGlobalVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    static SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    static SetGlobalVectorArray(propertyName: string, values: UnityEngine.Vector4[]): void;
    static SetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    static SetGlobalMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalMatrixArray(propertyName: string, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    static SetGlobalBuffer(name: string, buffer: UnityEngine.ComputeBuffer): void;
    static SetGlobalBuffer(nameID: number, buffer: UnityEngine.ComputeBuffer): void;
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
    static GetGlobalFloatArray(name: string, values: number[]): void;
    static GetGlobalFloatArray(nameID: number, values: number[]): void;
    static GetGlobalFloatArray(name: string): number[];
    static GetGlobalFloatArray(nameID: number): number[];
    static GetGlobalVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    static GetGlobalVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    static GetGlobalVectorArray(name: string): UnityEngine.Vector4[];
    static GetGlobalVectorArray(nameID: number): UnityEngine.Vector4[];
    static GetGlobalMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    static GetGlobalMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    static GetGlobalMatrixArray(name: string): UnityEngine.Matrix4x4[];
    static GetGlobalMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    static PropertyToID(name: string): number;
    static WarmupAllShaders(): void;
    static SetGlobalTexGenMode(propertyName: string, mode: UnityEngine.TexGenMode): void;
    static SetGlobalTextureMatrixName(propertyName: string, matrixName: string): void;
    // properties
    readonly isSupported: boolean;
    maximumLOD: number;
    static globalMaximumLOD: number;
    readonly renderQueue: number;
    static globalShaderHardwareTier: UnityEngine.Rendering.ShaderHardwareTier;
    // fields
  }
}

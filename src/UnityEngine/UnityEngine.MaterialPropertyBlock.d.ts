declare namespace UnityEngine {
  class MaterialPropertyBlock {
    // constructors
    constructor();
    // methods
    SetFloat(name: string, value: number): void;
    SetFloat(nameID: number, value: number): void;
    SetVector(name: string, value: UnityEngine.Vector4): void;
    SetVector(nameID: number, value: UnityEngine.Vector4): void;
    SetColor(name: string, value: UnityEngine.Color): void;
    SetColor(nameID: number, value: UnityEngine.Color): void;
    SetMatrix(name: string, value: UnityEngine.Matrix4x4): void;
    SetMatrix(nameID: number, value: UnityEngine.Matrix4x4): void;
    SetTexture(name: string, value: UnityEngine.Texture): void;
    SetTexture(nameID: number, value: UnityEngine.Texture): void;
    SetBuffer(name: string, value: UnityEngine.ComputeBuffer): void;
    SetBuffer(nameID: number, value: UnityEngine.ComputeBuffer): void;
    GetFloat(name: string): number;
    GetFloat(nameID: number): number;
    GetVector(name: string): UnityEngine.Vector4;
    GetVector(nameID: number): UnityEngine.Vector4;
    GetMatrix(name: string): UnityEngine.Matrix4x4;
    GetMatrix(nameID: number): UnityEngine.Matrix4x4;
    GetFloatArray(name: string, values: any): void;
    GetFloatArray(nameID: number, values: any): void;
    GetFloatArray(name: string): number[];
    GetFloatArray(nameID: number): number[];
    GetVectorArray(name: string, values: any): void;
    GetVectorArray(nameID: number, values: any): void;
    GetVectorArray(name: string): UnityEngine.Vector4[];
    GetVectorArray(nameID: number): UnityEngine.Vector4[];
    GetMatrixArray(name: string, values: any): void;
    GetMatrixArray(nameID: number, values: any): void;
    GetMatrixArray(name: string): UnityEngine.Matrix4x4[];
    GetMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    GetTexture(name: string): UnityEngine.Texture;
    GetTexture(nameID: number): UnityEngine.Texture;
    SetFloatArray(name: string, values: any): void;
    SetFloatArray(nameID: number, values: any): void;
    SetFloatArray(name: string, values: number[]): void;
    SetFloatArray(nameID: number, values: number[]): void;
    SetVectorArray(name: string, values: any): void;
    SetVectorArray(nameID: number, values: any): void;
    SetVectorArray(name: string, values: UnityEngine.Vector4[]): void;
    SetVectorArray(nameID: number, values: UnityEngine.Vector4[]): void;
    SetMatrixArray(name: string, values: any): void;
    SetMatrixArray(nameID: number, values: any): void;
    SetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): void;
    SetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): void;
    Clear(): void;
    AddFloat(name: string, value: number): void;
    AddFloat(nameID: number, value: number): void;
    AddVector(name: string, value: UnityEngine.Vector4): void;
    AddVector(nameID: number, value: UnityEngine.Vector4): void;
    AddColor(name: string, value: UnityEngine.Color): void;
    AddColor(nameID: number, value: UnityEngine.Color): void;
    AddMatrix(name: string, value: UnityEngine.Matrix4x4): void;
    AddMatrix(nameID: number, value: UnityEngine.Matrix4x4): void;
    AddTexture(name: string, value: UnityEngine.Texture): void;
    AddTexture(nameID: number, value: UnityEngine.Texture): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isEmpty: boolean;
    // fields
  }
}

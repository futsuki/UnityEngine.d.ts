declare namespace UnityEngine {
  class MaterialPropertyBlock {
    // constructors
    constructor();
    // methods
    SetFloat(name: string, value: number): any;
    SetFloat(nameID: number, value: number): any;
    SetVector(name: string, value: UnityEngine.Vector4): any;
    SetVector(nameID: number, value: UnityEngine.Vector4): any;
    SetColor(name: string, value: UnityEngine.Color): any;
    SetColor(nameID: number, value: UnityEngine.Color): any;
    SetMatrix(name: string, value: UnityEngine.Matrix4x4): any;
    SetMatrix(nameID: number, value: UnityEngine.Matrix4x4): any;
    SetTexture(name: string, value: UnityEngine.Texture): any;
    SetTexture(nameID: number, value: UnityEngine.Texture): any;
    SetBuffer(name: string, value: UnityEngine.ComputeBuffer): any;
    SetBuffer(nameID: number, value: UnityEngine.ComputeBuffer): any;
    GetFloat(name: string): number;
    GetFloat(nameID: number): number;
    GetVector(name: string): UnityEngine.Vector4;
    GetVector(nameID: number): UnityEngine.Vector4;
    GetMatrix(name: string): UnityEngine.Matrix4x4;
    GetMatrix(nameID: number): UnityEngine.Matrix4x4;
    GetFloatArray(name: string, values: any): any;
    GetFloatArray(nameID: number, values: any): any;
    GetFloatArray(name: string): number[];
    GetFloatArray(nameID: number): number[];
    GetVectorArray(name: string, values: any): any;
    GetVectorArray(nameID: number, values: any): any;
    GetVectorArray(name: string): UnityEngine.Vector4[];
    GetVectorArray(nameID: number): UnityEngine.Vector4[];
    GetMatrixArray(name: string, values: any): any;
    GetMatrixArray(nameID: number, values: any): any;
    GetMatrixArray(name: string): UnityEngine.Matrix4x4[];
    GetMatrixArray(nameID: number): UnityEngine.Matrix4x4[];
    GetTexture(name: string): UnityEngine.Texture;
    GetTexture(nameID: number): UnityEngine.Texture;
    SetFloatArray(name: string, values: any): any;
    SetFloatArray(nameID: number, values: any): any;
    SetFloatArray(name: string, values: number[]): any;
    SetFloatArray(nameID: number, values: number[]): any;
    SetVectorArray(name: string, values: any): any;
    SetVectorArray(nameID: number, values: any): any;
    SetVectorArray(name: string, values: UnityEngine.Vector4[]): any;
    SetVectorArray(nameID: number, values: UnityEngine.Vector4[]): any;
    SetMatrixArray(name: string, values: any): any;
    SetMatrixArray(nameID: number, values: any): any;
    SetMatrixArray(name: string, values: UnityEngine.Matrix4x4[]): any;
    SetMatrixArray(nameID: number, values: UnityEngine.Matrix4x4[]): any;
    Clear(): any;
    AddFloat(name: string, value: number): any;
    AddFloat(nameID: number, value: number): any;
    AddVector(name: string, value: UnityEngine.Vector4): any;
    AddVector(nameID: number, value: UnityEngine.Vector4): any;
    AddColor(name: string, value: UnityEngine.Color): any;
    AddColor(nameID: number, value: UnityEngine.Color): any;
    AddMatrix(name: string, value: UnityEngine.Matrix4x4): any;
    AddMatrix(nameID: number, value: UnityEngine.Matrix4x4): any;
    AddTexture(name: string, value: UnityEngine.Texture): any;
    AddTexture(nameID: number, value: UnityEngine.Texture): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isEmpty: boolean;
    // fields
  }
}

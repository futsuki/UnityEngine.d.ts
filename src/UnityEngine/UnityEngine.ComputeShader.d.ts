declare namespace UnityEngine {
  class ComputeShader {
    // constructors
    constructor();
    // methods
    FindKernel(name: string): number;
    HasKernel(name: string): boolean;
    GetKernelThreadGroupSizes(kernelIndex: number, x: any, y: any, z: any): void;
    SetFloat(name: string, val: number): void;
    SetFloat(nameID: number, val: number): void;
    SetInt(name: string, val: number): void;
    SetInt(nameID: number, val: number): void;
    SetBool(name: string, val: boolean): void;
    SetBool(nameID: number, val: boolean): void;
    SetVector(name: string, val: UnityEngine.Vector4): void;
    SetVector(nameID: number, val: UnityEngine.Vector4): void;
    SetFloats(name: string, values: number[]): void;
    SetFloats(nameID: number, values: number[]): void;
    SetInts(name: string, values: number[]): void;
    SetInts(nameID: number, values: number[]): void;
    SetTexture(kernelIndex: number, name: string, texture: UnityEngine.Texture): void;
    SetTexture(kernelIndex: number, nameID: number, texture: UnityEngine.Texture): void;
    SetTextureFromGlobal(kernelIndex: number, name: string, globalTextureName: string): void;
    SetTextureFromGlobal(kernelIndex: number, nameID: number, globalTextureNameID: number): void;
    SetBuffer(kernelIndex: number, name: string, buffer: UnityEngine.ComputeBuffer): void;
    SetBuffer(kernelIndex: number, nameID: number, buffer: UnityEngine.ComputeBuffer): void;
    Dispatch(kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number): void;
    DispatchIndirect(kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer): void;
    DispatchIndirect(kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer, argsOffset: number): void;
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

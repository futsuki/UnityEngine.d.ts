declare namespace UnityEngine {
  class ComputeShader {
    // constructors
    constructor();
    // methods
    FindKernel(name: string): number;
    HasKernel(name: string): boolean;
    GetKernelThreadGroupSizes(kernelIndex: number, x: any, y: any, z: any): any;
    SetFloat(name: string, val: number): any;
    SetFloat(nameID: number, val: number): any;
    SetInt(name: string, val: number): any;
    SetInt(nameID: number, val: number): any;
    SetBool(name: string, val: boolean): any;
    SetBool(nameID: number, val: boolean): any;
    SetVector(name: string, val: UnityEngine.Vector4): any;
    SetVector(nameID: number, val: UnityEngine.Vector4): any;
    SetFloats(name: string, values: number[]): any;
    SetFloats(nameID: number, values: number[]): any;
    SetInts(name: string, values: number[]): any;
    SetInts(nameID: number, values: number[]): any;
    SetTexture(kernelIndex: number, name: string, texture: UnityEngine.Texture): any;
    SetTexture(kernelIndex: number, nameID: number, texture: UnityEngine.Texture): any;
    SetTextureFromGlobal(kernelIndex: number, name: string, globalTextureName: string): any;
    SetTextureFromGlobal(kernelIndex: number, nameID: number, globalTextureNameID: number): any;
    SetBuffer(kernelIndex: number, name: string, buffer: UnityEngine.ComputeBuffer): any;
    SetBuffer(kernelIndex: number, nameID: number, buffer: UnityEngine.ComputeBuffer): any;
    Dispatch(kernelIndex: number, threadGroupsX: number, threadGroupsY: number, threadGroupsZ: number): any;
    DispatchIndirect(kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer): any;
    DispatchIndirect(kernelIndex: number, argsBuffer: UnityEngine.ComputeBuffer, argsOffset: number): any;
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

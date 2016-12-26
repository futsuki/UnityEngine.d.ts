declare namespace UnityEditor {
  class IAudioEffectPlugin {
    // constructors
    private constructor();
    // methods
    SetFloatParameter(name: string, value: number): boolean;
    GetFloatParameter(name: string, value: any): boolean;
    GetFloatParameterInfo(name: string, minRange: any, maxRange: any, defaultValue: any): boolean;
    GetFloatBuffer(name: string, data: any, numsamples: number): boolean;
    GetSampleRate(): number;
    IsPluginEditableAndEnabled(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

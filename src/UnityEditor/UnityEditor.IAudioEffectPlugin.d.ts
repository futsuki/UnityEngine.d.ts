declare namespace UnityEditor {
  class IAudioEffectPlugin extends System.Object {
    // constructors
    protected constructor();
    // methods
    SetFloatParameter(name: string, value: number): boolean;
    GetFloatParameter(name: string, value: any): boolean;
    GetFloatParameterInfo(name: string, minRange: any, maxRange: any, defaultValue: any): boolean;
    GetFloatBuffer(name: string, data: any, numsamples: number): boolean;
    GetSampleRate(): number;
    IsPluginEditableAndEnabled(): boolean;
    // properties
    // fields
  }
}

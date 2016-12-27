declare namespace UnityEditor {
  class AudioMixerEffectGUI extends System.Object {
    // constructors
    protected constructor();
    // methods
    static EffectHeader(text: string): void;
    static Slider(label: any, value: any, displayScale: number, displayExponent: number, unit: string, leftValue: number, rightValue: number, controller: UnityEditor.Audio.AudioMixerController, path: UnityEditor.Audio.AudioParameterPath, options: any[]): boolean;
    static ExposePopupCallback(obj: any): void;
    static UnexposePopupCallback(obj: any): void;
    static ParameterTransitionOverrideCallback(obj: any): void;
    static PopupButton(label: any, buttonContent: any, style: any, buttonRect: any, options: any[]): boolean;
    // properties
    // fields
  }
}

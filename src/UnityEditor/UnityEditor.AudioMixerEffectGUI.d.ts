declare namespace UnityEditor {
  class AudioMixerEffectGUI {
    // constructors
    private constructor();
    // methods
    static EffectHeader(text: string): any;
    static Slider(label: any, value: any, displayScale: number, displayExponent: number, unit: string, leftValue: number, rightValue: number, controller: UnityEditor.Audio.AudioMixerController, path: UnityEditor.Audio.AudioParameterPath, options: any[]): boolean;
    static ExposePopupCallback(obj: any): any;
    static UnexposePopupCallback(obj: any): any;
    static ParameterTransitionOverrideCallback(obj: any): any;
    static PopupButton(label: any, buttonContent: any, style: any, buttonRect: any, options: any[]): boolean;
    // properties
    // fields
  }
}

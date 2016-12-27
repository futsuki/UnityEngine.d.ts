declare namespace UnityEditor {
  class ColorPicker extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static MakeTexture(width: number, height: number): any;
    static GetGradientTextureWithAlpha1To0(): any;
    static GetGradientTextureWithAlpha0To1(): any;
    static Show(viewToUpdate: UnityEditor.GUIView, col: any): void;
    static Show(viewToUpdate: UnityEditor.GUIView, col: any, showAlpha: boolean, hdr: boolean, hdrConfig: UnityEditor.ColorPickerHDRConfig): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    OnDestroy(): void;
    // properties
    static readonly presetsEditorPrefID: string;
    static readonly defaultHDRConfig: UnityEditor.ColorPickerHDRConfig;
    static readonly visible: boolean;
    static color: any;
    static readonly get: UnityEditor.ColorPicker;
    currentPresetLibrary: string;
    // fields
  }
}

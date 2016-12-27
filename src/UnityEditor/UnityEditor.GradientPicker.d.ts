declare namespace UnityEditor {
  class GradientPicker extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static Show(newGradient: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    OnGUI(): void;
    static SetCurrentGradient(gradient: any): void;
    static CloseWindow(): void;
    static RepaintWindow(): void;
    // properties
    static readonly presetsEditorPrefID: string;
    static readonly instance: UnityEditor.GradientPicker;
    currentPresetLibrary: string;
    static readonly visible: boolean;
    static readonly gradient: any;
    // fields
  }
}

declare namespace UnityEditor {
  class AudioMixerGroupEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    Update(): void;
    OnInspectorGUI(): void;
    UseDefaultMargins(): boolean;
    // properties
    // fields
    static kPrefKeyForShowCpuUsage: string;
  }
}

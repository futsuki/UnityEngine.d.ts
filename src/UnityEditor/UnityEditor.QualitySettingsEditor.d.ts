declare namespace UnityEditor {
  class QualitySettingsEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    // properties
    // fields
    static kMinAsyncRingBufferSize: number;
    static kMaxAsyncRingBufferSize: number;
    static kMinAsyncUploadTimeSlice: number;
    static kMaxAsyncUploadTimeSlice: number;
  }
}

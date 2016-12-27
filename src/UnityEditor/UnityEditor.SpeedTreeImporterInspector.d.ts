declare namespace UnityEditor {
  class SpeedTreeImporterInspector extends UnityEditor.AssetImporterInspector {
    // constructors
    constructor();
    // methods
    OnDisable(): void;
    HasSameLODConfig(): boolean;
    CanUnifyLODConfig(): boolean;
    OnInspectorGUI(): void;
    // properties
    // fields
  }
}

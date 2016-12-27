declare namespace UnityEditor.VersionControl {
  class Plugin extends System.Object {
    // constructors
    protected constructor();
    // methods
    Dispose(): void;
    // properties
    static readonly availablePlugins: UnityEditor.VersionControl.Plugin[];
    readonly name: string;
    readonly configFields: UnityEditor.VersionControl.ConfigField[];
    // fields
  }
}

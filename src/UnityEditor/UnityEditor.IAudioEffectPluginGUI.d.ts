declare namespace UnityEditor {
  class IAudioEffectPluginGUI extends System.Object {
    // constructors
    protected constructor();
    // methods
    OnGUI(plugin: UnityEditor.IAudioEffectPlugin): boolean;
    // properties
    readonly Name: string;
    readonly Description: string;
    readonly Vendor: string;
    // fields
  }
}

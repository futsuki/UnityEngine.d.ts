declare namespace UnityEditor {
  class IAudioEffectPluginGUI {
    // constructors
    private constructor();
    // methods
    OnGUI(plugin: UnityEditor.IAudioEffectPlugin): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Name: string;
    readonly Description: string;
    readonly Vendor: string;
    // fields
  }
}

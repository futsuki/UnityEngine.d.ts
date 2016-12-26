declare namespace UnityEditor.VersionControl {
  class Plugin {
    // constructors
    private constructor();
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly availablePlugins: UnityEditor.VersionControl.Plugin[];
    readonly name: string;
    readonly configFields: UnityEditor.VersionControl.ConfigField[];
    // fields
  }
}

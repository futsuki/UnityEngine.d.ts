declare namespace UnityEditor.PluginImporterInspector {
  class ValueSwitcher {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(value: UnityEditor.PluginImporterInspector.Compatibility): UnityEditor.PluginImporterInspector.Compatibility;
    BeginInvoke(value: UnityEditor.PluginImporterInspector.Compatibility, callback: any, object: any): any;
    EndInvoke(result: any): UnityEditor.PluginImporterInspector.Compatibility;
    GetObjectData(info: any, context: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}

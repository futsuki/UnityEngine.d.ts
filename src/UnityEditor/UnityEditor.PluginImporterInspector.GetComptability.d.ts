declare namespace UnityEditor.PluginImporterInspector {
  class GetComptability {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(imp: UnityEditor.PluginImporter): boolean;
    BeginInvoke(imp: UnityEditor.PluginImporter, callback: any, object: any): any;
    EndInvoke(result: any): boolean;
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

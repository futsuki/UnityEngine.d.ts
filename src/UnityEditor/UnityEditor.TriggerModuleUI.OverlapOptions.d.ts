declare namespace UnityEditor.TriggerModuleUI {
  class OverlapOptions {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Ignore: UnityEditor.TriggerModuleUI.OverlapOptions;
    static Kill: UnityEditor.TriggerModuleUI.OverlapOptions;
    static Callback: UnityEditor.TriggerModuleUI.OverlapOptions;
  }
}

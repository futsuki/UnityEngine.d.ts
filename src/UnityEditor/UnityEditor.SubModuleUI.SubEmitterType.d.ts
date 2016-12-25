declare namespace UnityEditor.SubModuleUI {
  class SubEmitterType {
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
    static None: UnityEditor.SubModuleUI.SubEmitterType;
    static Birth: UnityEditor.SubModuleUI.SubEmitterType;
    static Collision: UnityEditor.SubModuleUI.SubEmitterType;
    static Death: UnityEditor.SubModuleUI.SubEmitterType;
    static TypesMax: UnityEditor.SubModuleUI.SubEmitterType;
  }
}

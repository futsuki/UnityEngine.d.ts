declare namespace UnityEngine {
  class DiagnosticSwitch {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    name: string;
    description: string;
    flags: UnityEngine.DiagnosticSwitchFlags;
    value: any;
    minValue: any;
    maxValue: any;
    persistentValue: any;
    enumInfo: UnityEngine.EnumInfo;
  }
}

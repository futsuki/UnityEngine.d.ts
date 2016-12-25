declare namespace UnityEditor.Handles {
  class FilterMode {
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
    static Off: UnityEditor.Handles.FilterMode;
    static ShowFiltered: UnityEditor.Handles.FilterMode;
    static ShowRest: UnityEditor.Handles.FilterMode;
  }
}
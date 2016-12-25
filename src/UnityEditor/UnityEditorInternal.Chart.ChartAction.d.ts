declare namespace UnityEditorInternal.Chart {
  class ChartAction {
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
    static None: UnityEditorInternal.Chart.ChartAction;
    static Activated: UnityEditorInternal.Chart.ChartAction;
    static Closed: UnityEditorInternal.Chart.ChartAction;
  }
}

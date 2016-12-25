declare namespace UnityEditorInternal.AnimationWindowState {
  class RefreshType {
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
    static None: UnityEditorInternal.AnimationWindowState.RefreshType;
    static CurvesOnly: UnityEditorInternal.AnimationWindowState.RefreshType;
    static Everything: UnityEditorInternal.AnimationWindowState.RefreshType;
  }
}

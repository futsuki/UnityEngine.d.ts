declare namespace UnityEditorInternal.VersionControl.ListControl {
  class SelectDirection {
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
    static Up: UnityEditorInternal.VersionControl.ListControl.SelectDirection;
    static Down: UnityEditorInternal.VersionControl.ListControl.SelectDirection;
    static Current: UnityEditorInternal.VersionControl.ListControl.SelectDirection;
  }
}

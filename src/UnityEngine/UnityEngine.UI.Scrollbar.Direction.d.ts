declare namespace UnityEngine.UI.Scrollbar {
  class Direction {
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
    static LeftToRight: UnityEngine.UI.Scrollbar.Direction;
    static RightToLeft: UnityEngine.UI.Scrollbar.Direction;
    static BottomToTop: UnityEngine.UI.Scrollbar.Direction;
    static TopToBottom: UnityEngine.UI.Scrollbar.Direction;
  }
}

declare namespace UnityEditor.Collaboration {
  class ProgressInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly title: string;
    readonly extraInfo: string;
    readonly currentCount: number;
    readonly totalCount: number;
    readonly completed: boolean;
    readonly cancelled: boolean;
    readonly canCancel: boolean;
    readonly lastErrorString: string;
    readonly lastError: number;
    readonly percentComplete: number;
    readonly isProgressTypeCount: boolean;
    readonly isProgressTypePercent: boolean;
    readonly errorOccured: boolean;
    // fields
  }
}

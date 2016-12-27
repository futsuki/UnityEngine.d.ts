declare namespace UnityEditor.Collaboration {
  class ProgressInfo extends System.Object {
    // constructors
    protected constructor();
    // methods
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

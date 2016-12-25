declare namespace UnityEditorInternal.AudioProfilerGroupInfoHelper {
  class AudioProfilerGroupInfoComparer {
    // constructors
    constructor(primarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices, secondarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices, sortByDescendingOrder: boolean);
    // methods
    Compare(a: UnityEditorInternal.AudioProfilerGroupInfoWrapper, b: UnityEditorInternal.AudioProfilerGroupInfoWrapper): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    primarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices;
    secondarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices;
    sortByDescendingOrder: boolean;
  }
}

declare namespace UnityEditorInternal.AudioProfilerClipInfoHelper {
  class AudioProfilerClipInfoComparer {
    // constructors
    constructor(primarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices, secondarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices, sortByDescendingOrder: boolean);
    // methods
    Compare(a: UnityEditorInternal.AudioProfilerClipInfoWrapper, b: UnityEditorInternal.AudioProfilerClipInfoWrapper): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    primarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices;
    secondarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices;
    sortByDescendingOrder: boolean;
  }
}

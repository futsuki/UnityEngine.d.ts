declare namespace UnityEditorInternal.AudioProfilerClipInfoHelper {
  class AudioProfilerClipInfoComparer extends System.Object {
    // constructors
    constructor(primarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices, secondarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices, sortByDescendingOrder: boolean);
    // methods
    Compare(a: UnityEditorInternal.AudioProfilerClipInfoWrapper, b: UnityEditorInternal.AudioProfilerClipInfoWrapper): number;
    // properties
    // fields
    primarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices;
    secondarySortKey: UnityEditorInternal.AudioProfilerClipInfoHelper.ColumnIndices;
    sortByDescendingOrder: boolean;
  }
}

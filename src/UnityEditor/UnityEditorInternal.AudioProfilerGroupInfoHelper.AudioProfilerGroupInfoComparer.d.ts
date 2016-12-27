declare namespace UnityEditorInternal.AudioProfilerGroupInfoHelper {
  class AudioProfilerGroupInfoComparer extends System.Object {
    // constructors
    constructor(primarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices, secondarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices, sortByDescendingOrder: boolean);
    // methods
    Compare(a: UnityEditorInternal.AudioProfilerGroupInfoWrapper, b: UnityEditorInternal.AudioProfilerGroupInfoWrapper): number;
    // properties
    // fields
    primarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices;
    secondarySortKey: UnityEditorInternal.AudioProfilerGroupInfoHelper.ColumnIndices;
    sortByDescendingOrder: boolean;
  }
}

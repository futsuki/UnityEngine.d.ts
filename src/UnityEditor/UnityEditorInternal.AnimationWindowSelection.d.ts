declare namespace UnityEditorInternal {
  class AnimationWindowSelection extends System.Object {
    // constructors
    constructor();
    // methods
    BeginOperations(): void;
    EndOperations(): void;
    Notify(): void;
    Set(newItem: UnityEditorInternal.AnimationWindowSelectionItem): void;
    Add(newItem: UnityEditorInternal.AnimationWindowSelectionItem): void;
    RangeAdd(newItemArray: UnityEditorInternal.AnimationWindowSelectionItem[]): void;
    UpdateClip(itemToUpdate: UnityEditorInternal.AnimationWindowSelectionItem, newClip: any): void;
    UpdateTimeOffset(itemToUpdate: UnityEditorInternal.AnimationWindowSelectionItem, timeOffset: number): void;
    Exists(itemToFind: UnityEditorInternal.AnimationWindowSelectionItem): boolean;
    Exists(predicate: ((obj: UnityEditorInternal.AnimationWindowSelectionItem) => boolean)): boolean;
    Find(predicate: ((obj: UnityEditorInternal.AnimationWindowSelectionItem) => boolean)): UnityEditorInternal.AnimationWindowSelectionItem;
    First(): UnityEditorInternal.AnimationWindowSelectionItem;
    GetRefreshHash(): number;
    Refresh(): void;
    ToArray(): UnityEditorInternal.AnimationWindowSelectionItem[];
    Clear(): void;
    ClearCache(): void;
    Synchronize(): void;
    // properties
    readonly count: number;
    readonly curves: UnityEditorInternal.AnimationWindowCurve[];
    locked: boolean;
    readonly disabled: boolean;
    readonly canRecord: boolean;
    readonly canAddCurves: boolean;
    // fields
    onSelectionChanged: (() => void);
  }
}

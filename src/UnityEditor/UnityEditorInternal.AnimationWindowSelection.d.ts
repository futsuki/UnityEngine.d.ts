declare namespace UnityEditorInternal {
  class AnimationWindowSelection {
    // constructors
    constructor();
    // methods
    BeginOperations(): any;
    EndOperations(): any;
    Notify(): any;
    Set(newItem: UnityEditorInternal.AnimationWindowSelectionItem): any;
    Add(newItem: UnityEditorInternal.AnimationWindowSelectionItem): any;
    RangeAdd(newItemArray: UnityEditorInternal.AnimationWindowSelectionItem[]): any;
    UpdateClip(itemToUpdate: UnityEditorInternal.AnimationWindowSelectionItem, newClip: any): any;
    UpdateTimeOffset(itemToUpdate: UnityEditorInternal.AnimationWindowSelectionItem, timeOffset: number): any;
    Exists(itemToFind: UnityEditorInternal.AnimationWindowSelectionItem): boolean;
    Exists(predicate: any): boolean;
    Find(predicate: any): UnityEditorInternal.AnimationWindowSelectionItem;
    First(): UnityEditorInternal.AnimationWindowSelectionItem;
    GetRefreshHash(): number;
    Refresh(): any;
    ToArray(): UnityEditorInternal.AnimationWindowSelectionItem[];
    Clear(): any;
    ClearCache(): any;
    Synchronize(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly count: number;
    readonly curves: any;
    locked: boolean;
    readonly disabled: boolean;
    readonly canRecord: boolean;
    readonly canAddCurves: boolean;
    // fields
    onSelectionChanged: any;
  }
}

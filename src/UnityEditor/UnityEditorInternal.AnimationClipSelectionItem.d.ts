declare namespace UnityEditorInternal {
  class AnimationClipSelectionItem {
    // constructors
    constructor();
    // methods
    static Create(animationClip: any, sourceObject: any): UnityEditorInternal.AnimationClipSelectionItem;
    GetRefreshHash(): number;
    ClearCache(): any;
    Synchronize(): any;
    Equals(other: UnityEditorInternal.AnimationWindowSelectionItem): boolean;
    GetEditorCurveValueType(curveBinding: UnityEditor.EditorCurveBinding): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly canRecord: boolean;
    readonly canChangeAnimationClip: boolean;
    readonly canSyncSceneSelection: boolean;
    timeOffset: number;
    id: number;
    gameObject: any;
    scriptableObject: any;
    animationClip: any;
    readonly rootGameObject: any;
    readonly animationPlayer: any;
    readonly animationIsEditable: boolean;
    readonly clipIsEditable: boolean;
    readonly objectIsPrefab: boolean;
    readonly canAddCurves: boolean;
    readonly curves: any;
    name: string;
    hideFlags: any;
    // fields
  }
}

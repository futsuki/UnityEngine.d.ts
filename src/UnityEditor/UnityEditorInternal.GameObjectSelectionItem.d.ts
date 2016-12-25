declare namespace UnityEditorInternal {
  class GameObjectSelectionItem {
    // constructors
    constructor();
    // methods
    static Create(gameObject: any): UnityEditorInternal.GameObjectSelectionItem;
    Synchronize(): any;
    GetRefreshHash(): number;
    ClearCache(): any;
    Equals(other: UnityEditorInternal.AnimationWindowSelectionItem): boolean;
    GetEditorCurveValueType(curveBinding: UnityEditor.EditorCurveBinding): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    animationClip: any;
    timeOffset: number;
    id: number;
    gameObject: any;
    scriptableObject: any;
    readonly rootGameObject: any;
    readonly animationPlayer: any;
    readonly animationIsEditable: boolean;
    readonly clipIsEditable: boolean;
    readonly objectIsPrefab: boolean;
    readonly canRecord: boolean;
    readonly canChangeAnimationClip: boolean;
    readonly canAddCurves: boolean;
    readonly canSyncSceneSelection: boolean;
    readonly curves: any;
    name: string;
    hideFlags: any;
    // fields
  }
}

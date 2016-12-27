declare namespace UnityEditorInternal {
  class AnimationWindowSelectionItem extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    static Create(): UnityEditorInternal.AnimationWindowSelectionItem;
    GetRefreshHash(): number;
    ClearCache(): void;
    Synchronize(): void;
    Equals(other: UnityEditorInternal.AnimationWindowSelectionItem): boolean;
    Equals(other: any): boolean;
    GetEditorCurveValueType(curveBinding: UnityEditor.EditorCurveBinding): any;
    // properties
    timeOffset: number;
    id: number;
    gameObject: any;
    scriptableObject: UnityEngine.ScriptableObject;
    animationClip: any;
    readonly rootGameObject: any;
    readonly animationPlayer: any;
    readonly animationIsEditable: boolean;
    readonly clipIsEditable: boolean;
    readonly objectIsPrefab: boolean;
    readonly canRecord: boolean;
    readonly canChangeAnimationClip: boolean;
    readonly canAddCurves: boolean;
    readonly canSyncSceneSelection: boolean;
    readonly curves: UnityEditorInternal.AnimationWindowCurve[];
    // fields
  }
}

declare namespace UnityEditorInternal {
  class AnimationWindowUtility {
    // constructors
    private constructor();
    // methods
    static CreateDefaultCurves(state: UnityEditorInternal.IAnimationRecordingState, selectionItem: UnityEditorInternal.AnimationWindowSelectionItem, properties: UnityEditor.EditorCurveBinding[]): void;
    static CreateDefaultCurve(selectionItem: UnityEditorInternal.AnimationWindowSelectionItem, binding: UnityEditor.EditorCurveBinding): UnityEditorInternal.AnimationWindowCurve;
    static ShouldShowAnimationWindowCurve(curveBinding: UnityEditor.EditorCurveBinding): boolean;
    static IsNodeLeftOverCurve(node: UnityEditorInternal.AnimationWindowHierarchyNode): boolean;
    static IsNodeAmbiguous(node: UnityEditorInternal.AnimationWindowHierarchyNode): boolean;
    static IsNodePhantom(node: UnityEditorInternal.AnimationWindowHierarchyNode): boolean;
    static AddSelectedKeyframes(state: UnityEditorInternal.AnimationWindowState, time: UnityEditorInternal.AnimationKeyTime): void;
    static AddKeyframes(state: UnityEditorInternal.AnimationWindowState, curves: UnityEditorInternal.AnimationWindowCurve[], time: UnityEditorInternal.AnimationKeyTime): void;
    static RemoveKeyframes(state: UnityEditorInternal.AnimationWindowState, curves: UnityEditorInternal.AnimationWindowCurve[], time: UnityEditorInternal.AnimationKeyTime): void;
    static AddKeyframeToCurve(curve: UnityEditorInternal.AnimationWindowCurve, value: any, type: any, time: UnityEditorInternal.AnimationKeyTime): UnityEditorInternal.AnimationWindowKeyframe;
    static FilterCurves(curves: UnityEditorInternal.AnimationWindowCurve[], path: string, entireHierarchy: boolean): any;
    static FilterCurves(curves: UnityEditorInternal.AnimationWindowCurve[], path: string, animatableObjectType: any): any;
    static IsCurveCreated(clip: any, binding: UnityEditor.EditorCurveBinding): boolean;
    static IsRectTransformPosition(curveBinding: UnityEditor.EditorCurveBinding): boolean;
    static ContainsFloatKeyframes(keyframes: any): boolean;
    static FilterCurves(curves: UnityEditorInternal.AnimationWindowCurve[], path: string, animatableObjectType: any, propertyName: string): any;
    static GetCurrentValue(rootGameObject: any, curveBinding: UnityEditor.EditorCurveBinding): any;
    static GetAnimatableProperties(gameObject: any, root: any, valueType: any): any;
    static GetAnimatableProperties(gameObject: any, root: any, objectType: any, valueType: any): any;
    static GetAnimatableProperties(scriptableObject: any, valueType: any): any;
    static CurveExists(binding: UnityEditor.EditorCurveBinding, curves: UnityEditorInternal.AnimationWindowCurve[]): boolean;
    static GetRenamedBinding(binding: UnityEditor.EditorCurveBinding, newPath: string): UnityEditor.EditorCurveBinding;
    static RenameCurvePath(curve: UnityEditorInternal.AnimationWindowCurve, newBinding: UnityEditor.EditorCurveBinding, clip: any): void;
    static GetPropertyDisplayName(propertyName: string): string;
    static ShouldPrefixWithTypeName(animatableObjectType: any, propertyName: string): boolean;
    static GetNicePropertyDisplayName(animatableObjectType: any, propertyName: string): string;
    static GetNicePropertyGroupDisplayName(animatableObjectType: any, propertyGroupName: string): string;
    static NicifyPropertyGroupName(animatableObjectType: any, propertyGroupName: string): string;
    static GetComponentIndex(name: string): number;
    static GetPropertyGroupName(propertyName: string): string;
    static GetNextKeyframeTime(curves: UnityEditorInternal.AnimationWindowCurve[], currentTime: number, frameRate: number): number;
    static GetPreviousKeyframeTime(curves: UnityEditorInternal.AnimationWindowCurve[], currentTime: number, frameRate: number): number;
    static GameObjectIsAnimatable(gameObject: any, animationClip: any): boolean;
    static InitializeGameobjectForAnimation(animatedObject: any): boolean;
    static EnsureActiveAnimationPlayer(animatedObject: any): any;
    static AddClipToAnimationPlayerComponent(animationPlayer: any, newClip: any): boolean;
    static AddClipToAnimatorComponent(animator: any, newClip: any): boolean;
    static AddClipToAnimationComponent(animation: any, newClip: any): boolean;
    static GetPropertyNodeID(setId: number, path: string, type: any, propertyName: string): number;
    static GetClosestAnimationPlayerComponentInParents(tr: any): any;
    static GetClosestAnimatorInParents(tr: any): any;
    static GetClosestAnimationInParents(tr: any): any;
    static SyncTimeArea(from: UnityEditor.TimeArea, to: UnityEditor.TimeArea): void;
    static DrawRangeOfClip(rect: any, startOfClipPixel: number, endOfClipPixel: number): void;
    static DrawRangeOfSelection(rect: any, startPixel: number, endPixel: number): void;
    static DrawPlayHead(positionX: number, minY: number, maxY: number, alpha: number): void;
    static GetCurveWrapper(curve: UnityEditorInternal.AnimationWindowCurve, clip: any): UnityEditor.CurveWrapper;
    static CurveSelectionToAnimationWindowKeyframe(curveSelection: UnityEditor.CurveSelection, allCurves: any): UnityEditorInternal.AnimationWindowKeyframe;
    static AnimationWindowKeyframeToCurveSelection(keyframe: UnityEditorInternal.AnimationWindowKeyframe, curveEditor: UnityEditor.CurveEditor): UnityEditor.CurveSelection;
    static BestMatchForPaste(binding: UnityEditor.EditorCurveBinding, clipboardCurves: any, targetCurves: any): UnityEditorInternal.AnimationWindowCurve;
    static IsTransformType(type: any): boolean;
    static ForceGrouping(binding: UnityEditor.EditorCurveBinding): boolean;
    static ControllerChanged(): void;
    // properties
    // fields
  }
}

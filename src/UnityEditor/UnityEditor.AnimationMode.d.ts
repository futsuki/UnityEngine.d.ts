declare namespace UnityEditor {
  class AnimationMode extends System.Object {
    // constructors
    constructor();
    // methods
    static IsPropertyAnimated(target: UnityEngine.Object, propertyPath: string): boolean;
    static StopAnimationMode(): void;
    static InAnimationMode(): boolean;
    static StartAnimationMode(): void;
    static BeginSampling(): void;
    static EndSampling(): void;
    static SampleAnimationClip(gameObject: any, clip: any, time: number): void;
    static AddPropertyModification(binding: UnityEditor.EditorCurveBinding, modification: UnityEditor.PropertyModification, keepPrefabOverride: boolean): void;
    // properties
    static readonly animatedPropertyColor: any;
    // fields
  }
}

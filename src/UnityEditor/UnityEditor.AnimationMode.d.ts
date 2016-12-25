declare namespace UnityEditor {
  class AnimationMode {
    // constructors
    constructor();
    // methods
    static IsPropertyAnimated(target: any, propertyPath: string): boolean;
    static StopAnimationMode(): any;
    static InAnimationMode(): boolean;
    static StartAnimationMode(): any;
    static BeginSampling(): any;
    static EndSampling(): any;
    static SampleAnimationClip(gameObject: any, clip: any, time: number): any;
    static AddPropertyModification(binding: UnityEditor.EditorCurveBinding, modification: UnityEditor.PropertyModification, keepPrefabOverride: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly animatedPropertyColor: any;
    // fields
  }
}

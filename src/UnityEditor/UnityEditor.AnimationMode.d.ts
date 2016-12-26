declare namespace UnityEditor {
  class AnimationMode {
    // constructors
    constructor();
    // methods
    static IsPropertyAnimated(target: any, propertyPath: string): boolean;
    static StopAnimationMode(): void;
    static InAnimationMode(): boolean;
    static StartAnimationMode(): void;
    static BeginSampling(): void;
    static EndSampling(): void;
    static SampleAnimationClip(gameObject: any, clip: any, time: number): void;
    static AddPropertyModification(binding: UnityEditor.EditorCurveBinding, modification: UnityEditor.PropertyModification, keepPrefabOverride: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly animatedPropertyColor: any;
    // fields
  }
}

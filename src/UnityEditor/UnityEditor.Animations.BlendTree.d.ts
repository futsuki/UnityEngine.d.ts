declare namespace UnityEditor.Animations {
  class BlendTree {
    // constructors
    constructor();
    // methods
    AddChild(motion: any): any;
    AddChild(motion: any, position: any): any;
    AddChild(motion: any, threshold: number): any;
    RemoveChild(index: number): any;
    CreateBlendTreeChild(threshold: number): UnityEditor.Animations.BlendTree;
    CreateBlendTreeChild(position: any): UnityEditor.Animations.BlendTree;
    ValidateIfRetargetable(val: boolean): boolean;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    blendParameter: string;
    blendParameterY: string;
    blendType: UnityEditor.Animations.BlendTreeType;
    children: UnityEditor.Animations.ChildMotion[];
    useAutomaticThresholds: boolean;
    minThreshold: number;
    maxThreshold: number;
    readonly averageDuration: number;
    readonly averageAngularSpeed: number;
    readonly averageSpeed: any;
    readonly apparentSpeed: number;
    readonly isLooping: boolean;
    readonly legacy: boolean;
    readonly isHumanMotion: boolean;
    readonly isAnimatorMotion: boolean;
    name: string;
    hideFlags: any;
    // fields
  }
}

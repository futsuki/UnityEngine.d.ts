declare namespace UnityEditor.Animations {
  class BlendTree extends UnityEngine.Motion {
    // constructors
    constructor();
    // methods
    AddChild(motion: UnityEngine.Motion): void;
    AddChild(motion: UnityEngine.Motion, position: any): void;
    AddChild(motion: UnityEngine.Motion, threshold: number): void;
    RemoveChild(index: number): void;
    CreateBlendTreeChild(threshold: number): UnityEditor.Animations.BlendTree;
    CreateBlendTreeChild(position: any): UnityEditor.Animations.BlendTree;
    // properties
    blendParameter: string;
    blendParameterY: string;
    blendType: UnityEditor.Animations.BlendTreeType;
    children: UnityEditor.Animations.ChildMotion[];
    useAutomaticThresholds: boolean;
    minThreshold: number;
    maxThreshold: number;
    // fields
  }
}

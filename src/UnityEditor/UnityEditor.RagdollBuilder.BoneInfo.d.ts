declare namespace UnityEditor.RagdollBuilder {
  class BoneInfo {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    name: string;
    anchor: any;
    joint: any;
    parent: UnityEditor.RagdollBuilder.BoneInfo;
    minLimit: number;
    maxLimit: number;
    swingLimit: number;
    axis: any;
    normalAxis: any;
    radiusScale: number;
    colliderType: any;
    children: any;
    density: number;
    summedMass: number;
  }
}

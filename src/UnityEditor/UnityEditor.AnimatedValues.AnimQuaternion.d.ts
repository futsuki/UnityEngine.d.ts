declare namespace UnityEditor.AnimatedValues {
  class AnimQuaternion {
    // constructors
    constructor(value: any);
    constructor(value: any, callback: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isAnimating: boolean;
    target: any;
    value: any;
    // fields
    speed: number;
    valueChanged: any;
  }
}
declare namespace UnityEditor.AnimatedValues {
  class AnimFloat {
    // constructors
    constructor(value: number);
    constructor(value: number, callback: (() => void));
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isAnimating: boolean;
    target: number;
    value: number;
    // fields
    speed: number;
    valueChanged: any;
  }
}

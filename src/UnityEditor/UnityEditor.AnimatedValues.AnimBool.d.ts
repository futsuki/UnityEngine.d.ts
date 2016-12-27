declare namespace UnityEditor.AnimatedValues {
  class AnimBool {
    // constructors
    constructor();
    constructor(value: boolean);
    constructor(callback: (() => void));
    constructor(value: boolean, callback: (() => void));
    // methods
    Fade(from: number, to: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly faded: number;
    readonly isAnimating: boolean;
    target: boolean;
    value: boolean;
    // fields
    speed: number;
    valueChanged: any;
  }
}

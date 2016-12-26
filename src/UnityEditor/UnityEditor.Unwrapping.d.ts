declare namespace UnityEditor {
  class Unwrapping {
    // constructors
    constructor();
    // methods
    static GeneratePerTriangleUV(src: any): any[];
    static GeneratePerTriangleUV(src: any, settings: UnityEditor.UnwrapParam): any[];
    static GenerateSecondaryUVSet(src: any): void;
    static GenerateSecondaryUVSet(src: any, settings: UnityEditor.UnwrapParam): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

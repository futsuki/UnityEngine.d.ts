declare namespace UnityEditor {
  class GradientEditor {
    // constructors
    constructor();
    // methods
    Init(gradient: any, numSteps: number): void;
    static DrawGradientWithBackground(position: any, gradientTexture: any): void;
    OnGUI(position: any): void;
    static GetBackgroundTexture(): any;
    static CreateCheckerTexture(numCols: number, numRows: number, cellPixelWidth: number, col1: any, col2: any): any;
    static DrawGradientSwatch(position: any, gradient: any, bgColor: any): void;
    static DrawGradientSwatch(position: any, property: UnityEditor.SerializedProperty, bgColor: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly target: any;
    // fields
  }
}

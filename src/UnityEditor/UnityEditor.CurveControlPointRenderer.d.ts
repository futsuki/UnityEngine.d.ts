declare namespace UnityEditor {
  class CurveControlPointRenderer extends System.Object {
    // constructors
    constructor(style: UnityEditor.CurveEditor.Styles);
    // methods
    FlushCache(): void;
    Clear(): void;
    Render(): void;
    AddPoint(rect: any, color: any): void;
    AddSelectedPoint(rect: any, color: any): void;
    AddSemiSelectedPoint(rect: any, color: any): void;
    // properties
    // fields
  }
}

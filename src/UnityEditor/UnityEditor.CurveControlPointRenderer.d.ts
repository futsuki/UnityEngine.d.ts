declare namespace UnityEditor {
  class CurveControlPointRenderer {
    // constructors
    constructor(style: UnityEditor.CurveEditor.Styles);
    // methods
    FlushCache(): any;
    Clear(): any;
    Render(): any;
    AddPoint(rect: any, color: any): any;
    AddSelectedPoint(rect: any, color: any): any;
    AddSemiSelectedPoint(rect: any, color: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

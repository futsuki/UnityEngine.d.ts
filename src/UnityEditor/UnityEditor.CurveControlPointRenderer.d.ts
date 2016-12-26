declare namespace UnityEditor {
  class CurveControlPointRenderer {
    // constructors
    constructor(style: UnityEditor.CurveEditor.Styles);
    // methods
    FlushCache(): void;
    Clear(): void;
    Render(): void;
    AddPoint(rect: any, color: any): void;
    AddSelectedPoint(rect: any, color: any): void;
    AddSemiSelectedPoint(rect: any, color: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

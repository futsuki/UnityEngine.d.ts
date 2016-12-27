declare namespace UnityEditor {
  class ControlPointRenderer extends System.Object {
    // constructors
    constructor(icon: any);
    // methods
    FlushCache(): void;
    Clear(): void;
    Render(): void;
    AddPoint(rect: any, color: any): void;
    // properties
    static readonly material: any;
    // fields
  }
}

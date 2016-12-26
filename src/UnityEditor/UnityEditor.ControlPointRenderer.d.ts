declare namespace UnityEditor {
  class ControlPointRenderer {
    // constructors
    constructor(icon: any);
    // methods
    FlushCache(): void;
    Clear(): void;
    Render(): void;
    AddPoint(rect: any, color: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly material: any;
    // fields
  }
}

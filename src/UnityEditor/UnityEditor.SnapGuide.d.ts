declare namespace UnityEditor {
  class SnapGuide {
    // constructors
    constructor(value: number, vertices: any[]);
    constructor(value: number, safe: boolean, vertices: any[]);
    // methods
    Draw(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    value: number;
    lineVertices: any;
    safe: boolean;
  }
}

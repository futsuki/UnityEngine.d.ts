declare namespace UnityEditor {
  class SnapGuide extends System.Object {
    // constructors
    constructor(value: number, vertices: any[]);
    constructor(value: number, safe: boolean, vertices: any[]);
    // methods
    Draw(): void;
    // properties
    // fields
    value: number;
    lineVertices: any[];
    safe: boolean;
  }
}

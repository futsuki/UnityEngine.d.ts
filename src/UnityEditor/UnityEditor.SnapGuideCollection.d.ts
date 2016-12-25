declare namespace UnityEditor {
  class SnapGuideCollection {
    // constructors
    constructor();
    // methods
    Clear(): any;
    AddGuide(guide: UnityEditor.SnapGuide): any;
    SnapToGuides(value: number, snapDistance: number): number;
    OnGUI(): any;
    DrawGuides(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

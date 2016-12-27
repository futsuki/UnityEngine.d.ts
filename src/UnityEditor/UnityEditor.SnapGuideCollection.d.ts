declare namespace UnityEditor {
  class SnapGuideCollection extends System.Object {
    // constructors
    constructor();
    // methods
    Clear(): void;
    AddGuide(guide: UnityEditor.SnapGuide): void;
    SnapToGuides(value: number, snapDistance: number): number;
    OnGUI(): void;
    DrawGuides(): void;
    // properties
    // fields
  }
}

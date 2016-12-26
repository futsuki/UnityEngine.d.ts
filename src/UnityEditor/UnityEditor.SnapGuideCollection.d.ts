declare namespace UnityEditor {
  class SnapGuideCollection {
    // constructors
    constructor();
    // methods
    Clear(): void;
    AddGuide(guide: UnityEditor.SnapGuide): void;
    SnapToGuides(value: number, snapDistance: number): number;
    OnGUI(): void;
    DrawGuides(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

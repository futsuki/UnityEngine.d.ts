declare namespace UnityEditor.AddComponentWindow {
  class NewScriptElement extends UnityEditor.AddComponentWindow.GroupElement {
    // constructors
    constructor();
    // methods
    OnGUI(): void;
    CanCreate(): boolean;
    Create(): void;
    TargetPath(): string;
    // properties
    // fields
  }
}

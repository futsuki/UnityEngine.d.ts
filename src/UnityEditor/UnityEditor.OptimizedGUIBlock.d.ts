declare namespace UnityEditor {
  class OptimizedGUIBlock extends System.Object {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Begin(hasChanged: boolean, position: any): boolean;
    End(): void;
    BeginRecording(): void;
    EndRecording(): void;
    Execute(): void;
    // properties
    valid: boolean;
    // fields
  }
}

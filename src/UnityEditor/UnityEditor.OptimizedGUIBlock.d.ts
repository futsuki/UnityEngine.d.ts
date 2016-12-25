declare namespace UnityEditor {
  class OptimizedGUIBlock {
    // constructors
    constructor();
    // methods
    Dispose(): any;
    Begin(hasChanged: boolean, position: any): boolean;
    End(): any;
    BeginRecording(): any;
    EndRecording(): any;
    Execute(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    valid: boolean;
    // fields
  }
}

declare namespace UnityEditor {
  class OptimizedGUIBlock {
    // constructors
    constructor();
    // methods
    Dispose(): void;
    Begin(hasChanged: boolean, position: any): boolean;
    End(): void;
    BeginRecording(): void;
    EndRecording(): void;
    Execute(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    valid: boolean;
    // fields
  }
}

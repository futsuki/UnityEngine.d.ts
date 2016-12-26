declare namespace UnityEditor {
  class AttachProfilerUI {
    // constructors
    constructor();
    // methods
    IsEditor(): boolean;
    GetConnectedProfiler(): string;
    static DirectIPConnect(ip: string): void;
    static DirectURLConnect(url: string): void;
    OnGUILayout(window: UnityEditor.EditorWindow): void;
    OnGUI(connectRect: any, profilerLabel: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

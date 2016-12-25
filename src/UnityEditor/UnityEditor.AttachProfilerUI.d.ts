declare namespace UnityEditor {
  class AttachProfilerUI {
    // constructors
    constructor();
    // methods
    IsEditor(): boolean;
    GetConnectedProfiler(): string;
    static DirectIPConnect(ip: string): any;
    static DirectURLConnect(url: string): any;
    OnGUILayout(window: UnityEditor.EditorWindow): any;
    OnGUI(connectRect: any, profilerLabel: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

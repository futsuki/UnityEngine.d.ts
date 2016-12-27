declare namespace UnityEditor {
  class AttachProfilerUI extends System.Object {
    // constructors
    constructor();
    // methods
    IsEditor(): boolean;
    GetConnectedProfiler(): string;
    static DirectIPConnect(ip: string): void;
    static DirectURLConnect(url: string): void;
    OnGUILayout(window: UnityEditor.EditorWindow): void;
    OnGUI(connectRect: any, profilerLabel: any): void;
    // properties
    // fields
  }
}

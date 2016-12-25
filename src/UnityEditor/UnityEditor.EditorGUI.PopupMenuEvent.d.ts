declare namespace UnityEditor.EditorGUI {
  class PopupMenuEvent {
    // constructors
    constructor(cmd: string, v: UnityEditor.GUIView);
    // methods
    SendEvent(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    commandName: string;
    receiver: UnityEditor.GUIView;
  }
}

declare namespace UnityEditor.EditorGUI {
  class PopupMenuEvent extends System.Object {
    // constructors
    constructor(cmd: string, v: UnityEditor.GUIView);
    // methods
    SendEvent(): void;
    // properties
    // fields
    commandName: string;
    receiver: UnityEditor.GUIView;
  }
}

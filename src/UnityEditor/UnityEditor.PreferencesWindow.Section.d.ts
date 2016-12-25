declare namespace UnityEditor.PreferencesWindow {
  class Section {
    // constructors
    constructor(name: string, guiFunc: UnityEditor.PreferencesWindow.OnGUIDelegate);
    constructor(name: string, icon: any, guiFunc: UnityEditor.PreferencesWindow.OnGUIDelegate);
    constructor(content: any, guiFunc: UnityEditor.PreferencesWindow.OnGUIDelegate);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    content: any;
    guiFunc: UnityEditor.PreferencesWindow.OnGUIDelegate;
  }
}

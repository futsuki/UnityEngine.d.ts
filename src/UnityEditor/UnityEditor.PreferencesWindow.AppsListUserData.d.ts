declare namespace UnityEditor.PreferencesWindow {
  class AppsListUserData extends System.Object {
    // constructors
    constructor(paths: string[], str: UnityEditor.PreferencesWindow.RefString, onChanged: (() => void));
    // methods
    // properties
    // fields
    paths: string[];
    str: UnityEditor.PreferencesWindow.RefString;
    onChanged: (() => void);
  }
}

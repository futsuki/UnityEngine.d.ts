declare namespace UnityEditor.PreferencesWindow {
  class AppsListUserData {
    // constructors
    constructor(paths: string[], str: UnityEditor.PreferencesWindow.RefString, onChanged: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    paths: string[];
    str: UnityEditor.PreferencesWindow.RefString;
    onChanged: any;
  }
}

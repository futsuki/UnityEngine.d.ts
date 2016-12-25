declare namespace UnityEditor.PreferencesWindow {
  class RefString {
    // constructors
    constructor(s: string);
    // methods
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    str: string;
  }
}

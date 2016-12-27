declare namespace UnityEditor.PreferencesWindow {
  class Section {
    // constructors
    constructor(name: string, guiFunc: (() => void));
    constructor(name: string, icon: any, guiFunc: (() => void));
    constructor(content: any, guiFunc: (() => void));
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    content: any;
    guiFunc: (() => void);
  }
}

declare namespace UnityEditor.PreferencesWindow {
  class Section extends System.Object {
    // constructors
    constructor(name: string, guiFunc: (() => void));
    constructor(name: string, icon: any, guiFunc: (() => void));
    constructor(content: any, guiFunc: (() => void));
    // methods
    // properties
    // fields
    content: any;
    guiFunc: (() => void);
  }
}

declare namespace UnityEditor.AddComponentWindow {
  class ComponentElement extends UnityEditor.AddComponentWindow.Element {
    // constructors
    constructor(level: number, name: string, menuPath: string, commandString: string);
    // methods
    CompareTo(o: any): number;
    // properties
    readonly legacyContent: any;
    // fields
    typeName: string;
    menuPath: string;
    isLegacy: boolean;
  }
}

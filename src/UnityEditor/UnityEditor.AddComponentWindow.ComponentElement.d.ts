declare namespace UnityEditor.AddComponentWindow {
  class ComponentElement {
    // constructors
    constructor(level: number, name: string, menuPath: string, commandString: string);
    // methods
    CompareTo(o: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly legacyContent: any;
    readonly name: string;
    // fields
    typeName: string;
    menuPath: string;
    isLegacy: boolean;
    level: number;
    content: any;
  }
}

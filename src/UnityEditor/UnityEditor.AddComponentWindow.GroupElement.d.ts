declare namespace UnityEditor.AddComponentWindow {
  class GroupElement {
    // constructors
    constructor(level: number, name: string);
    // methods
    CompareTo(o: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    // fields
    scroll: any;
    selectedIndex: number;
    level: number;
    content: any;
  }
}

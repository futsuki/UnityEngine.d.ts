declare namespace UnityEditor.AddComponentWindow {
  class NewScriptElement {
    // constructors
    constructor();
    // methods
    OnGUI(): any;
    CanCreate(): boolean;
    Create(): any;
    TargetPath(): string;
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

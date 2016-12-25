declare namespace UnityEditor.AddComponentWindow {
  class Element {
    // constructors
    constructor();
    // methods
    CompareTo(o: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    // fields
    level: number;
    content: any;
  }
}

declare namespace UnityEditor {
  class HumanTemplate {
    // constructors
    constructor();
    // methods
    Insert(name: string, templateName: string): any;
    Find(name: string): string;
    ClearTemplate(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}

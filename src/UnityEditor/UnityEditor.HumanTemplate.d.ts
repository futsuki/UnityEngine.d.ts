declare namespace UnityEditor {
  class HumanTemplate {
    // constructors
    constructor();
    // methods
    Insert(name: string, templateName: string): void;
    Find(name: string): string;
    ClearTemplate(): void;
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

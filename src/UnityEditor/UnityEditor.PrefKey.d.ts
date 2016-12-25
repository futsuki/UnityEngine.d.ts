declare namespace UnityEditor {
  class PrefKey {
    // constructors
    constructor();
    constructor(name: string, shortcut: string);
    // methods
    Load(): any;
    ToUniqueString(): string;
    FromUniqueString(s: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Name: string;
    KeyboardEvent: any;
    readonly activated: boolean;
    // fields
  }
}

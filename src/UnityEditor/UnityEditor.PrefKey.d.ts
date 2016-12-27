declare namespace UnityEditor {
  class PrefKey extends System.Object {
    // constructors
    constructor();
    constructor(name: string, shortcut: string);
    // methods
    Load(): void;
    ToUniqueString(): string;
    FromUniqueString(s: string): void;
    // properties
    readonly Name: string;
    KeyboardEvent: any;
    readonly activated: boolean;
    // fields
  }
}

declare namespace UnityEditor {
  class PrefColor extends System.Object {
    // constructors
    constructor();
    constructor(name: string, defaultRed: number, defaultGreen: number, defaultBlue: number, defaultAlpha: number);
    // methods
    Load(): void;
    ToUniqueString(): string;
    FromUniqueString(s: string): void;
    // properties
    Color: any;
    readonly Name: string;
    // fields
  }
}

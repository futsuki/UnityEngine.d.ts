declare namespace UnityEditor {
  class PrefColor {
    // constructors
    constructor();
    constructor(name: string, defaultRed: number, defaultGreen: number, defaultBlue: number, defaultAlpha: number);
    // methods
    Load(): void;
    ToUniqueString(): string;
    FromUniqueString(s: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    Color: any;
    readonly Name: string;
    // fields
  }
}

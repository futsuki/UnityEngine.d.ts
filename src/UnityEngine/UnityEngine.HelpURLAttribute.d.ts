declare namespace UnityEngine {
  class HelpURLAttribute {
    // constructors
    constructor(url: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly URL: string;
    readonly TypeId: any;
    // fields
  }
}

declare namespace UnityEngine {
  class HeaderAttribute {
    // constructors
    constructor(header: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    order: number;
    readonly TypeId: any;
    // fields
    header: string;
  }
}

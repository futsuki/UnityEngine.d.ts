declare namespace UnityEngine {
  class TooltipAttribute {
    // constructors
    constructor(tooltip: string);
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
    tooltip: string;
  }
}

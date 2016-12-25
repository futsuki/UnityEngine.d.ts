declare namespace UnityEngine {
  class GUITargetAttribute {
    // constructors
    constructor();
    constructor(displayIndex: number);
    constructor(displayIndex: number, displayIndex1: number);
    constructor(displayIndex: number, displayIndex1: number, displayIndexList: number[]);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly TypeId: any;
    // fields
  }
}

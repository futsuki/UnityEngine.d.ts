declare namespace UnityEngine {
  class ContextMenuItemAttribute {
    // constructors
    constructor(name: string, function_: string);
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
    name: string;
    "function": string;
  }
}

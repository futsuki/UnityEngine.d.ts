declare namespace UnityEditor {
  class CustomPropertyDrawer {
    // constructors
    constructor(type: any);
    constructor(type: any, useForChildren: boolean);
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

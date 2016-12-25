declare namespace UnityEditor.Callbacks {
  class OnOpenAssetAttribute {
    // constructors
    constructor();
    constructor(callbackOrder: number);
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

declare namespace UnityEditor.Callbacks {
  class RegisterPluginsAttribute {
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

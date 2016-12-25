declare namespace UnityEditor.Callbacks {
  class PostProcessSceneAttribute {
    // constructors
    constructor();
    constructor(callbackOrder: number);
    constructor(callbackOrder: number, version: number);
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

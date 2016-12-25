declare namespace UnityEngine {
  class AddComponentMenu {
    // constructors
    constructor(menuName: string);
    constructor(menuName: string, order: number);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly componentMenu: string;
    readonly componentOrder: number;
    readonly TypeId: any;
    // fields
  }
}

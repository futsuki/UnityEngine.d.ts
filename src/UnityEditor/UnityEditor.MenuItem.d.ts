declare namespace UnityEditor {
  class MenuItem {
    // constructors
    constructor(itemName: string);
    constructor(itemName: string, isValidateFunction: boolean);
    constructor(itemName: string, isValidateFunction: boolean, priority: number);
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
    menuItem: string;
    validate: boolean;
    priority: number;
  }
}

declare namespace UnityEditor {
  class CustomEditor {
    // constructors
    constructor(inspectedType: any);
    constructor(inspectedType: any, editorForChildClasses: boolean);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    isFallback: boolean;
    readonly TypeId: any;
    // fields
  }
}

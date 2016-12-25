declare namespace UnityEditor {
  class EditorWindowTitleAttribute {
    // constructors
    constructor();
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    title: string;
    icon: string;
    useTypeNameAsIconName: boolean;
    readonly TypeId: any;
    // fields
  }
}

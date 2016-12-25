declare namespace UnityEngine {
  class CreateAssetMenuAttribute {
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
    menuName: string;
    fileName: string;
    order: number;
    readonly TypeId: any;
    // fields
  }
}

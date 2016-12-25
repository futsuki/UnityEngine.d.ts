declare namespace UnityEngine {
  class TextAreaAttribute {
    // constructors
    constructor();
    constructor(minLines: number, maxLines: number);
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
    minLines: number;
    maxLines: number;
  }
}

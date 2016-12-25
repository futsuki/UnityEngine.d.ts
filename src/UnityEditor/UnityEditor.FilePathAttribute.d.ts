declare namespace UnityEditor {
  class FilePathAttribute {
    // constructors
    constructor(relativePath: string, location: UnityEditor.FilePathAttribute.Location);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    filepath: string;
    readonly TypeId: any;
    // fields
  }
}

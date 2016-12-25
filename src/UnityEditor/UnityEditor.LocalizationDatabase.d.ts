declare namespace UnityEditor {
  class LocalizationDatabase {
    // constructors
    constructor();
    // methods
    static GetLocalizedString(original: string): string;
    static MarkForTranslation(value: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

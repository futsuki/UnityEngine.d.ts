declare namespace UnityEditor {
  class CacheServerPreferences {
    // constructors
    constructor();
    // methods
    static ReadPreferences(): void;
    static WritePreferences(): void;
    static OnGUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

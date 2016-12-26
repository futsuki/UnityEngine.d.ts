declare namespace UnityEditor {
  class PresetLibraryManager {
    // constructors
    constructor();
    // methods
    GetLastError(): string;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}

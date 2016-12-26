declare namespace UnityEditorInternal {
  class RenderDoc {
    // constructors
    constructor();
    // methods
    static IsInstalled(): boolean;
    static IsLoaded(): boolean;
    static IsSupported(): boolean;
    static Load(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

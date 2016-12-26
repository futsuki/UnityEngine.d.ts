declare namespace UnityEditor {
  class ColorClipboard {
    // constructors
    private constructor();
    // methods
    static SetColor(color: any): void;
    static HasColor(): boolean;
    static TryGetColor(allowHDR: boolean, color: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

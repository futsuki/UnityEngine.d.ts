declare namespace UnityEditor {
  class ColorClipboard {
    // constructors
    private constructor();
    // methods
    static SetColor(color: any): any;
    static HasColor(): boolean;
    static TryGetColor(allowHDR: boolean, color: any): boolean;
    // properties
    // fields
  }
}

declare namespace UnityEngine {
  class Cursor {
    // constructors
    constructor();
    // methods
    static SetCursor(texture: UnityEngine.Texture2D, hotspot: UnityEngine.Vector2, cursorMode: UnityEngine.CursorMode): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static visible: boolean;
    static lockState: UnityEngine.CursorLockMode;
    // fields
  }
}

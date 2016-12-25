declare namespace UnityEngine {
  class Display {
    // constructors
    private constructor();
    // methods
    static MultiDisplayLicense(): boolean;
    static RelativeMouseAt(inputMouseCoordinates: UnityEngine.Vector3): UnityEngine.Vector3;
    // properties
    // fields
    static displays: UnityEngine.Display[];
  }
}

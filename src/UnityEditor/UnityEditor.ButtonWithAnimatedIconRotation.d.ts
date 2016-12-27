declare namespace UnityEditor {
  class ButtonWithAnimatedIconRotation extends System.Object {
    // constructors
    constructor(angleCallback: (() => number), repaintCallback: (() => void), repaintsPerSecond: number, mouseDownButton: boolean);
    // methods
    OnGUI(rect: any, guiContent: any, animate: boolean, style: any): boolean;
    Clear(): void;
    // properties
    // fields
  }
}

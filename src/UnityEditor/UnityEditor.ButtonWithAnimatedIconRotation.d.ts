declare namespace UnityEditor {
  class ButtonWithAnimatedIconRotation {
    // constructors
    constructor(angleCallback: any, repaintCallback: any, repaintsPerSecond: number, mouseDownButton: boolean);
    // methods
    OnGUI(rect: any, guiContent: any, animate: boolean, style: any): boolean;
    Clear(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

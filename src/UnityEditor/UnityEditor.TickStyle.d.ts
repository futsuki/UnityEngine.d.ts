declare namespace UnityEditor {
  class TickStyle {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    tickColor: UnityEditor.EditorGUIUtility.SkinnedColor;
    labelColor: UnityEditor.EditorGUIUtility.SkinnedColor;
    distMin: number;
    distFull: number;
    distLabel: number;
    stubs: boolean;
    centerLabel: boolean;
    unit: string;
  }
}

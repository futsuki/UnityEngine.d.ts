declare namespace UnityEditor.TimeCursorManipulator {
  class Alignment {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Center: UnityEditor.TimeCursorManipulator.Alignment;
    static Left: UnityEditor.TimeCursorManipulator.Alignment;
    static Right: UnityEditor.TimeCursorManipulator.Alignment;
  }
}

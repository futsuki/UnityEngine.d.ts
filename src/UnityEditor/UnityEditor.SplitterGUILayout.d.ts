declare namespace UnityEditor {
  class SplitterGUILayout {
    // constructors
    constructor();
    // methods
    static BeginSplit(state: UnityEditor.SplitterState, style: any, vertical: boolean, options: any[]): void;
    static BeginHorizontalSplit(state: UnityEditor.SplitterState, options: any[]): void;
    static BeginVerticalSplit(state: UnityEditor.SplitterState, options: any[]): void;
    static BeginHorizontalSplit(state: UnityEditor.SplitterState, style: any, options: any[]): void;
    static BeginVerticalSplit(state: UnityEditor.SplitterState, style: any, options: any[]): void;
    static EndVerticalSplit(): void;
    static EndHorizontalSplit(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

declare namespace UnityEditor {
  class SplitterGUILayout {
    // constructors
    constructor();
    // methods
    static BeginSplit(state: UnityEditor.SplitterState, style: any, vertical: boolean, options: any[]): any;
    static BeginHorizontalSplit(state: UnityEditor.SplitterState, options: any[]): any;
    static BeginVerticalSplit(state: UnityEditor.SplitterState, options: any[]): any;
    static BeginHorizontalSplit(state: UnityEditor.SplitterState, style: any, options: any[]): any;
    static BeginVerticalSplit(state: UnityEditor.SplitterState, style: any, options: any[]): any;
    static EndVerticalSplit(): any;
    static EndHorizontalSplit(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

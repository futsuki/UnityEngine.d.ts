declare namespace UnityEditor.EditorGUILayout {
  class VerticalScrollViewScope {
    // constructors
    constructor(scrollPosition: any, options: any[]);
    constructor(scrollPosition: any, alwaysShowVertical: boolean, verticalScrollbar: any, background: any, options: any[]);
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly scrollPosition: any;
    handleScrollWheel: boolean;
    // fields
  }
}

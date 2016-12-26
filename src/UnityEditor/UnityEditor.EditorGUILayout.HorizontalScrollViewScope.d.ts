declare namespace UnityEditor.EditorGUILayout {
  class HorizontalScrollViewScope {
    // constructors
    constructor(scrollPosition: any, options: any[]);
    constructor(scrollPosition: any, alwaysShowHorizontal: boolean, horizontalScrollbar: any, background: any, options: any[]);
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

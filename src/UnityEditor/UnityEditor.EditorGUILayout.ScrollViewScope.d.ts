declare namespace UnityEditor.EditorGUILayout {
  class ScrollViewScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(scrollPosition: any, options: any[]);
    constructor(scrollPosition: any, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, options: any[]);
    constructor(scrollPosition: any, horizontalScrollbar: any, verticalScrollbar: any, options: any[]);
    constructor(scrollPosition: any, style: any, options: any[]);
    constructor(scrollPosition: any, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: any, verticalScrollbar: any, background: any, options: any[]);
    // methods
    // properties
    readonly scrollPosition: any;
    handleScrollWheel: boolean;
    // fields
  }
}

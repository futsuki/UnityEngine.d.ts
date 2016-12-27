declare namespace UnityEngine.GUILayout {
  class ScrollViewScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(scrollPosition: UnityEngine.Vector2, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    constructor(scrollPosition: UnityEngine.Vector2, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle, background: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    // properties
    readonly scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    // fields
  }
}

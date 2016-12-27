declare namespace UnityEngine {
  class GUILayoutUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static BeginGroup(GroupName: string): void;
    static EndGroup(groupName: string): void;
    static GetRect(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetRect(content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(width: number, height: number): UnityEngine.Rect;
    static GetRect(width: number, height: number, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetRect(width: number, height: number, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(width: number, height: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetLastRect(): UnityEngine.Rect;
    static GetAspectRect(aspect: number): UnityEngine.Rect;
    static GetAspectRect(aspect: number, style: UnityEngine.GUIStyle): UnityEngine.Rect;
    static GetAspectRect(aspect: number, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    static GetAspectRect(aspect: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    // properties
    // fields
  }
}

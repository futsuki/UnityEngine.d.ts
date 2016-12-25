declare namespace UnityEngine.GUILayout {
  class AreaScope {
    // constructors
    constructor(screenRect: UnityEngine.Rect);
    constructor(screenRect: UnityEngine.Rect, text: string);
    constructor(screenRect: UnityEngine.Rect, image: UnityEngine.Texture);
    constructor(screenRect: UnityEngine.Rect, content: UnityEngine.GUIContent);
    constructor(screenRect: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle);
    constructor(screenRect: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle);
    constructor(screenRect: UnityEngine.Rect, content: UnityEngine.GUIContent, style: UnityEngine.GUIStyle);
    // methods
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

declare namespace UnityEngine.GUI {
  class GroupScope {
    // constructors
    constructor(position: UnityEngine.Rect);
    constructor(position: UnityEngine.Rect, text: string);
    constructor(position: UnityEngine.Rect, image: UnityEngine.Texture);
    constructor(position: UnityEngine.Rect, content: UnityEngine.GUIContent);
    constructor(position: UnityEngine.Rect, style: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, text: string, style: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, image: UnityEngine.Texture, style: UnityEngine.GUIStyle);
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

declare namespace UnityEngine {
  class GUIContent {
    // constructors
    constructor();
    constructor(text: string);
    constructor(image: UnityEngine.Texture);
    constructor(text: string, image: UnityEngine.Texture);
    constructor(text: string, tooltip: string);
    constructor(image: UnityEngine.Texture, tooltip: string);
    constructor(text: string, image: UnityEngine.Texture, tooltip: string);
    constructor(src: UnityEngine.GUIContent);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    text: string;
    image: UnityEngine.Texture;
    tooltip: string;
    // fields
    static none: UnityEngine.GUIContent;
  }
}

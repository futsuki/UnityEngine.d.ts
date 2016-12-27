declare namespace UnityEngine {
  class GUIContent extends System.Object {
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
    // properties
    text: string;
    image: UnityEngine.Texture;
    tooltip: string;
    // fields
    static none: UnityEngine.GUIContent;
  }
}

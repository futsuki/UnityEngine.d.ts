declare namespace UnityEditor {
  class SpriteRectCache extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    RectAt(i: number): UnityEditor.SpriteRect;
    AddRect(r: UnityEditor.SpriteRect): void;
    RemoveRect(r: UnityEditor.SpriteRect): void;
    ClearAll(): void;
    GetIndex(spriteRect: UnityEditor.SpriteRect): number;
    Contains(spriteRect: UnityEditor.SpriteRect): boolean;
    // properties
    readonly Count: number;
    // fields
    m_Rects: UnityEditor.SpriteRect[];
  }
}

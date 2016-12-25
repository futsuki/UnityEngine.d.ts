declare namespace UnityEditor {
  class SpriteRectCache {
    // constructors
    constructor();
    // methods
    RectAt(i: number): UnityEditor.SpriteRect;
    AddRect(r: UnityEditor.SpriteRect): any;
    RemoveRect(r: UnityEditor.SpriteRect): any;
    ClearAll(): any;
    GetIndex(spriteRect: UnityEditor.SpriteRect): number;
    Contains(spriteRect: UnityEditor.SpriteRect): boolean;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly Count: number;
    name: string;
    hideFlags: any;
    // fields
    m_Rects: any;
  }
}

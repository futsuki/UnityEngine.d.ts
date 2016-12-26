declare namespace UnityEditor {
  class SpriteRectCache {
    // constructors
    constructor();
    // methods
    RectAt(i: number): UnityEditor.SpriteRect;
    AddRect(r: UnityEditor.SpriteRect): void;
    RemoveRect(r: UnityEditor.SpriteRect): void;
    ClearAll(): void;
    GetIndex(spriteRect: UnityEditor.SpriteRect): number;
    Contains(spriteRect: UnityEditor.SpriteRect): boolean;
    SetDirty(): void;
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

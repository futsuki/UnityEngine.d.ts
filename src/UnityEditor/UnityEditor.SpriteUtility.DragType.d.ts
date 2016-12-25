declare namespace UnityEditor.SpriteUtility {
  class DragType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static NotInitialized: UnityEditor.SpriteUtility.DragType;
    static SpriteAnimation: UnityEditor.SpriteUtility.DragType;
    static CreateMultiple: UnityEditor.SpriteUtility.DragType;
  }
}

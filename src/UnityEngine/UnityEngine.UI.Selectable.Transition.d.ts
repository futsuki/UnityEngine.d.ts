declare namespace UnityEngine.UI.Selectable {
  class Transition {
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
    static None: UnityEngine.UI.Selectable.Transition;
    static ColorTint: UnityEngine.UI.Selectable.Transition;
    static SpriteSwap: UnityEngine.UI.Selectable.Transition;
    static Animation: UnityEngine.UI.Selectable.Transition;
  }
}

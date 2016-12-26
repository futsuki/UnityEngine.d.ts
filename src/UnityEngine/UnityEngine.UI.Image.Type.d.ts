declare namespace UnityEngine.UI.Image {
  class Type {
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
    static Simple: UnityEngine.UI.Image.Type;
    static Sliced: UnityEngine.UI.Image.Type;
    static Tiled: UnityEngine.UI.Image.Type;
    static Filled: UnityEngine.UI.Image.Type;
  }
}

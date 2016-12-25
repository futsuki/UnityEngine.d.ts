declare namespace UnityEngine.RectTransform {
  class Edge {
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
    static Left: UnityEngine.RectTransform.Edge;
    static Right: UnityEngine.RectTransform.Edge;
    static Top: UnityEngine.RectTransform.Edge;
    static Bottom: UnityEngine.RectTransform.Edge;
  }
}

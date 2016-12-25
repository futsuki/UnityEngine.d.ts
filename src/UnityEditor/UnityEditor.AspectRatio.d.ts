declare namespace UnityEditor {
  class AspectRatio {
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
    static AspectOthers: UnityEditor.AspectRatio;
    static Aspect4by3: UnityEditor.AspectRatio;
    static Aspect5by4: UnityEditor.AspectRatio;
    static Aspect16by10: UnityEditor.AspectRatio;
    static Aspect16by9: UnityEditor.AspectRatio;
  }
}

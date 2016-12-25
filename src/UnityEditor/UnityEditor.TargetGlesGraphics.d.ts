declare namespace UnityEditor {
  class TargetGlesGraphics {
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
    static OpenGLES_1_x: UnityEditor.TargetGlesGraphics;
    static OpenGLES_2_0: UnityEditor.TargetGlesGraphics;
    static OpenGLES_3_0: UnityEditor.TargetGlesGraphics;
    static Automatic: UnityEditor.TargetGlesGraphics;
  }
}

declare namespace UnityEditor {
  class InstructionType {
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
    static kStyleDraw: UnityEditor.InstructionType;
    static kClipPush: UnityEditor.InstructionType;
    static kClipPop: UnityEditor.InstructionType;
    static kLayoutBeginGroup: UnityEditor.InstructionType;
    static kLayoutEndGroup: UnityEditor.InstructionType;
    static kLayoutEntry: UnityEditor.InstructionType;
  }
}

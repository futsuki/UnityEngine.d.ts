declare namespace UnityEditorInternal {
  class AnimatorControllerParameterType {
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
    static Float: UnityEditorInternal.AnimatorControllerParameterType;
    static Int: UnityEditorInternal.AnimatorControllerParameterType;
    static Bool: UnityEditorInternal.AnimatorControllerParameterType;
    static Trigger: UnityEditorInternal.AnimatorControllerParameterType;
  }
}

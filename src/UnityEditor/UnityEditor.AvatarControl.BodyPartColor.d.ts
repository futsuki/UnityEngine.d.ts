declare namespace UnityEditor.AvatarControl {
  class BodyPartColor {
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
    static Off: UnityEditor.AvatarControl.BodyPartColor;
    static Green: UnityEditor.AvatarControl.BodyPartColor;
    static Red: UnityEditor.AvatarControl.BodyPartColor;
    static IKGreen: UnityEditor.AvatarControl.BodyPartColor;
    static IKRed: UnityEditor.AvatarControl.BodyPartColor;
  }
}

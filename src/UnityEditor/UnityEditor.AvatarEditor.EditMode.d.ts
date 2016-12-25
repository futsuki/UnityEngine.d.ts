declare namespace UnityEditor.AvatarEditor {
  class EditMode {
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
    static NotEditing: UnityEditor.AvatarEditor.EditMode;
    static Starting: UnityEditor.AvatarEditor.EditMode;
    static Editing: UnityEditor.AvatarEditor.EditMode;
    static Stopping: UnityEditor.AvatarEditor.EditMode;
  }
}

declare namespace UnityEditor.ASServerAdminWindow {
  class Action {
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
    static Main: UnityEditor.ASServerAdminWindow.Action;
    static CreateUser: UnityEditor.ASServerAdminWindow.Action;
    static SetPassword: UnityEditor.ASServerAdminWindow.Action;
    static CreateProject: UnityEditor.ASServerAdminWindow.Action;
    static ModifyUser: UnityEditor.ASServerAdminWindow.Action;
  }
}

declare namespace UnityEditor.ProjectWindowCallback {
  class EndNameEditAction {
    // constructors
    private constructor();
    // methods
    OnEnable(): void;
    Action(instanceId: number, pathName: string, resourceFile: string): void;
    CleanUp(): void;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}

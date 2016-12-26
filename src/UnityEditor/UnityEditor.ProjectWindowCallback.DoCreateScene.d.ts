declare namespace UnityEditor.ProjectWindowCallback {
  class DoCreateScene {
    // constructors
    constructor();
    // methods
    Action(instanceId: number, pathName: string, resourceFile: string): void;
    OnEnable(): void;
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

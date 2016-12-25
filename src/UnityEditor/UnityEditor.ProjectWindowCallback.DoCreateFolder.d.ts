declare namespace UnityEditor.ProjectWindowCallback {
  class DoCreateFolder {
    // constructors
    constructor();
    // methods
    Action(instanceId: number, pathName: string, resourceFile: string): any;
    OnEnable(): any;
    CleanUp(): any;
    SetDirty(): any;
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

declare namespace UnityEditor.ProjectWindowCallback {
  class EndNameEditAction extends UnityEngine.ScriptableObject {
    // constructors
    protected constructor();
    // methods
    OnEnable(): void;
    Action(instanceId: number, pathName: string, resourceFile: string): void;
    CleanUp(): void;
    // properties
    // fields
  }
}

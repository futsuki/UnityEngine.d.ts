declare namespace UnityEditor {
  class EditorBuildSettingsScene extends System.Object {
    // constructors
    constructor(path: string, enable: boolean);
    constructor();
    // methods
    CompareTo(obj: any): number;
    static GetActiveSceneList(scenes: UnityEditor.EditorBuildSettingsScene[]): string[];
    // properties
    enabled: boolean;
    path: string;
    // fields
  }
}

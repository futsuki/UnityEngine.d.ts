declare namespace UnityEditor {
  class EditorBuildSettingsScene {
    // constructors
    constructor(path: string, enable: boolean);
    constructor();
    // methods
    CompareTo(obj: any): number;
    static GetActiveSceneList(scenes: UnityEditor.EditorBuildSettingsScene[]): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    enabled: boolean;
    path: string;
    // fields
  }
}

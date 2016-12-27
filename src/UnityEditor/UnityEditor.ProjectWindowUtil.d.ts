declare namespace UnityEditor {
  class ProjectWindowUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static CreateNewGUISkin(): void;
    static CreateAsset(asset: UnityEngine.Object, pathName: string): void;
    static CreateFolder(): void;
    static CreateScene(): void;
    static CreatePrefab(): void;
    static ShowCreatedAsset(o: UnityEngine.Object): void;
    static StartNameEditingIfProjectWindowExists(instanceID: number, endAction: UnityEditor.ProjectWindowCallback.EndNameEditAction, pathName: string, icon: any, resourceFile: string): void;
    static GetAncestors(instanceID: number): number[];
    static IsFolder(instanceID: number): boolean;
    static GetContainingFolder(path: string): string;
    static GetBaseFolders(folders: string[]): string[];
    // properties
    // fields
  }
}

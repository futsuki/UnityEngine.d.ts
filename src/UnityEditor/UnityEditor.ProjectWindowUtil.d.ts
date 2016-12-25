declare namespace UnityEditor {
  class ProjectWindowUtil {
    // constructors
    constructor();
    // methods
    static CreateNewGUISkin(): any;
    static CreateAsset(asset: any, pathName: string): any;
    static CreateFolder(): any;
    static CreateScene(): any;
    static CreatePrefab(): any;
    static ShowCreatedAsset(o: any): any;
    static StartNameEditingIfProjectWindowExists(instanceID: number, endAction: UnityEditor.ProjectWindowCallback.EndNameEditAction, pathName: string, icon: any, resourceFile: string): any;
    static GetAncestors(instanceID: number): number[];
    static IsFolder(instanceID: number): boolean;
    static GetContainingFolder(path: string): string;
    static GetBaseFolders(folders: string[]): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

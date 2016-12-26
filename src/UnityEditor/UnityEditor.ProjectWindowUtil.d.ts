declare namespace UnityEditor {
  class ProjectWindowUtil {
    // constructors
    constructor();
    // methods
    static CreateNewGUISkin(): void;
    static CreateAsset(asset: any, pathName: string): void;
    static CreateFolder(): void;
    static CreateScene(): void;
    static CreatePrefab(): void;
    static ShowCreatedAsset(o: any): void;
    static StartNameEditingIfProjectWindowExists(instanceID: number, endAction: UnityEditor.ProjectWindowCallback.EndNameEditAction, pathName: string, icon: any, resourceFile: string): void;
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

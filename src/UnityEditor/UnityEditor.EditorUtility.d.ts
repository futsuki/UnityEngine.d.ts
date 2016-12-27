declare namespace UnityEditor {
  class EditorUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static RevealInFinder(path: string): void;
    static SetDirty(target: UnityEngine.Object): void;
    static LoadWindowLayout(path: string): boolean;
    static IsPersistent(target: UnityEngine.Object): boolean;
    static DisplayDialog(title: string, message: string, ok: string, cancel: string): boolean;
    static DisplayDialog(title: string, message: string, ok: string): boolean;
    static DisplayDialogComplex(title: string, message: string, ok: string, cancel: string, alt: string): number;
    static OpenFilePanel(title: string, directory: string, extension: string): string;
    static OpenFilePanelWithFilters(title: string, directory: string, filters: string[]): string;
    static SaveFilePanel(title: string, directory: string, defaultName: string, extension: string): string;
    static NaturalCompare(a: string, b: string): number;
    static OpenFolderPanel(title: string, folder: string, defaultName: string): string;
    static SaveFolderPanel(title: string, folder: string, defaultName: string): string;
    static SaveFilePanelInProject(title: string, defaultName: string, extension: string, message: string): string;
    static SaveFilePanelInProject(title: string, defaultName: string, extension: string, message: string, path: string): string;
    static WarnPrefab(target: UnityEngine.Object, title: string, warning: string, okButton: string): boolean;
    static FindAsset(path: string, type: any): UnityEngine.Object;
    static InstanceIDToObject(instanceID: number): UnityEngine.Object;
    static CompressTexture(texture: any, format: any, quality: number): void;
    static CompressTexture(texture: any, format: any, quality: any): void;
    static InvokeDiffTool(leftTitle: string, leftFile: string, rightTitle: string, rightFile: string, ancestorTitle: string, ancestorFile: string): string;
    static CopySerialized(source: UnityEngine.Object, dest: UnityEngine.Object): void;
    static CopySerializedIfDifferent(source: UnityEngine.Object, dest: UnityEngine.Object): void;
    static GetAssetPath(asset: UnityEngine.Object): string;
    static CollectDependencies(roots: UnityEngine.Object[]): UnityEngine.Object[];
    static CollectDeepHierarchy(roots: UnityEngine.Object[]): UnityEngine.Object[];
    static UnloadUnusedAssets(): void;
    static UnloadUnusedAssetsIgnoreManagedReferences(): void;
    static UnloadUnusedAssetsImmediate(): void;
    static UnloadUnusedAssetsImmediate(includeMonoReferencesAsRoots: boolean): void;
    static BuildResourceFile(selection: UnityEngine.Object[], pathName: string): boolean;
    static DisplayPopupMenu(position: any, menuItemPath: string, command: UnityEditor.MenuCommand): void;
    static DisplayCustomMenu(position: any, options: any[], selected: number, callback: ((userData: any, options: string[], selected: number) => void), userData: any): void;
    static DisplayCustomMenu(position: any, options: any[], selected: number, callback: ((userData: any, options: string[], selected: number) => void), userData: any, showHotkey: boolean): void;
    static FocusProjectWindow(): void;
    static FormatBytes(bytes: number): string;
    static FormatBytes(bytes: number): string;
    static DisplayProgressBar(title: string, info: string, progress: number): void;
    static DisplayCancelableProgressBar(title: string, info: string, progress: number): boolean;
    static ClearProgressBar(): void;
    static GetObjectEnabled(target: UnityEngine.Object): number;
    static SetObjectEnabled(target: UnityEngine.Object, enabled: boolean): void;
    static SetSelectedWireframeHidden(renderer: any, enabled: boolean): void;
    static SetSelectedRenderState(renderer: any, renderState: UnityEditor.EditorSelectedRenderState): void;
    static ExtractOggFile(obj: UnityEngine.Object, path: string): boolean;
    static CreateGameObjectWithHideFlags(name: string, flags: any, components: any[]): any;
    static CompileCSharp(sources: string[], references: string[], defines: string[], outputFile: string): string[];
    static OpenWithDefaultApp(fileName: string): void;
    static InstantiatePrefab(target: UnityEngine.Object): UnityEngine.Object;
    static ReplacePrefab(go: any, targetPrefab: UnityEngine.Object, options: UnityEditor.ReplacePrefabOptions): any;
    static ReplacePrefab(go: any, targetPrefab: UnityEngine.Object): any;
    static CreateEmptyPrefab(path: string): UnityEngine.Object;
    static ReconnectToLastPrefab(go: any): boolean;
    static GetPrefabType(target: UnityEngine.Object): UnityEditor.PrefabType;
    static GetPrefabParent(source: UnityEngine.Object): UnityEngine.Object;
    static FindPrefabRoot(source: any): any;
    static ResetToPrefabState(source: UnityEngine.Object): boolean;
    // properties
    static audioMasterMute: boolean;
    // fields
  }
}

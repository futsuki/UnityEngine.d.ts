declare namespace UnityEditor {
  class Unsupported {
    // constructors
    constructor();
    // methods
    static CaptureScreenshotImmediate(filePath: string, x: number, y: number, width: number, height: number): any;
    static GetSubmenusCommands(menuPath: string): string[];
    static GetTypeFromFullName(fullName: string): any;
    static GetSubmenus(menuPath: string): string[];
    static GetSubmenusIncludingSeparators(menuPath: string): string[];
    static PrepareObjectContextMenu(c: any, contextUserData: number): any;
    static IsDeveloperBuild(): boolean;
    static IsBleedingEdgeBuild(): boolean;
    static IsDestroyScriptableObject(target: any): boolean;
    static IsNativeCodeBuiltInReleaseMode(): boolean;
    static GetBaseUnityDeveloperFolder(): string;
    static StopPlayingImmediately(): any;
    static SceneTrackerFlushDirty(): any;
    static SetAllowCursorHide(allow: boolean): any;
    static SetAllowCursorLock(allow: boolean): any;
    static SetRenderSettingsUseFogNoDirty(fog: boolean): any;
    static SetQualitySettingsShadowDistanceTemporarily(distance: number): any;
    static DeleteGameObjectSelection(): any;
    static CopyGameObjectsToPasteboard(): any;
    static PasteGameObjectsFromPasteboard(): any;
    static GetSerializedAssetInterfaceSingleton(className: string): any;
    static DuplicateGameObjectsUsingPasteboard(): any;
    static CopyComponentToPasteboard(component: any): boolean;
    static PasteComponentFromPasteboard(go: any): boolean;
    static PasteComponentValuesFromPasteboard(component: any): boolean;
    static CopyStateMachineDataToPasteboard(stateMachineObject: any, controller: UnityEditor.Animations.AnimatorController, layerIndex: number): any;
    static CopyStateMachineDataToPasteboard(stateMachineObjects: any[], monoPositions: any[], controller: UnityEditor.Animations.AnimatorController, layerIndex: number): any;
    static PasteToStateMachineFromPasteboard(sm: UnityEditor.Animations.AnimatorStateMachine, controller: UnityEditor.Animations.AnimatorController, layerIndex: number, position: any): any;
    static HasStateMachineDataInPasteboard(): boolean;
    static SmartReset(obj: any): any;
    static ResolveSymlinks(path: string): string;
    static SetApplicationSettingCompressAssetsOnImport(value: boolean): any;
    static GetApplicationSettingCompressAssetsOnImport(): boolean;
    static GetLocalIdentifierInFile(instanceID: number): number;
    static IsHiddenFile(path: string): boolean;
    static ClearSkinCache(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

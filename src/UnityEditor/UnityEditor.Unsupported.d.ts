declare namespace UnityEditor {
  class Unsupported extends System.Object {
    // constructors
    constructor();
    // methods
    static CaptureScreenshotImmediate(filePath: string, x: number, y: number, width: number, height: number): void;
    static GetSubmenusCommands(menuPath: string): string[];
    static GetTypeFromFullName(fullName: string): any;
    static GetSubmenus(menuPath: string): string[];
    static GetSubmenusIncludingSeparators(menuPath: string): string[];
    static PrepareObjectContextMenu(c: UnityEngine.Object, contextUserData: number): void;
    static IsDeveloperBuild(): boolean;
    static IsBleedingEdgeBuild(): boolean;
    static IsDestroyScriptableObject(target: UnityEngine.ScriptableObject): boolean;
    static IsNativeCodeBuiltInReleaseMode(): boolean;
    static GetBaseUnityDeveloperFolder(): string;
    static StopPlayingImmediately(): void;
    static SceneTrackerFlushDirty(): void;
    static SetAllowCursorHide(allow: boolean): void;
    static SetAllowCursorLock(allow: boolean): void;
    static SetRenderSettingsUseFogNoDirty(fog: boolean): void;
    static SetQualitySettingsShadowDistanceTemporarily(distance: number): void;
    static DeleteGameObjectSelection(): void;
    static CopyGameObjectsToPasteboard(): void;
    static PasteGameObjectsFromPasteboard(): void;
    static GetSerializedAssetInterfaceSingleton(className: string): UnityEngine.Object;
    static DuplicateGameObjectsUsingPasteboard(): void;
    static CopyComponentToPasteboard(component: any): boolean;
    static PasteComponentFromPasteboard(go: any): boolean;
    static PasteComponentValuesFromPasteboard(component: any): boolean;
    static CopyStateMachineDataToPasteboard(stateMachineObject: UnityEngine.Object, controller: UnityEditor.Animations.AnimatorController, layerIndex: number): void;
    static CopyStateMachineDataToPasteboard(stateMachineObjects: UnityEngine.Object[], monoPositions: any[], controller: UnityEditor.Animations.AnimatorController, layerIndex: number): void;
    static PasteToStateMachineFromPasteboard(sm: UnityEditor.Animations.AnimatorStateMachine, controller: UnityEditor.Animations.AnimatorController, layerIndex: number, position: any): void;
    static HasStateMachineDataInPasteboard(): boolean;
    static SmartReset(obj: UnityEngine.Object): void;
    static ResolveSymlinks(path: string): string;
    static SetApplicationSettingCompressAssetsOnImport(value: boolean): void;
    static GetApplicationSettingCompressAssetsOnImport(): boolean;
    static GetLocalIdentifierInFile(instanceID: number): number;
    static IsHiddenFile(path: string): boolean;
    static ClearSkinCache(): void;
    // properties
    // fields
  }
}

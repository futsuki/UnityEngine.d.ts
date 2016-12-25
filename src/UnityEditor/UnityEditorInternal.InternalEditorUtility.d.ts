declare namespace UnityEditorInternal {
  class InternalEditorUtility {
    // constructors
    constructor();
    // methods
    static BumpMapSettingsFixingWindowReportResult(result: number): any;
    static BumpMapTextureNeedsFixingInternal(material: any, propName: string, flaggedAsNormal: boolean): boolean;
    static FixNormalmapTextureInternal(material: any, propName: string): any;
    static GetEditorAssemblyPath(): string;
    static GetEngineAssemblyPath(): string;
    static CalculateHashForObjectsAndDependencies(objects: any[]): string;
    static ExecuteCommandOnKeyWindow(commandName: string): any;
    static InstantiateMaterialsInEditMode(renderer: any): any[];
    static BuildCanBeAppended(target: UnityEditor.BuildTarget, location: string): UnityEditorInternal.CanAppendBuild;
    static LoadAssemblyWrapper(dllName: string, dllLocation: string): any;
    static CreateScriptableObjectUnchecked(script: UnityEditor.MonoScript): number;
    static RequestScriptReload(): any;
    static SwitchSkinAndRepaintAllViews(): any;
    static RepaintAllViews(): any;
    static GetIsInspectorExpanded(obj: any): boolean;
    static SetIsInspectorExpanded(obj: any, isExpanded: boolean): any;
    static SaveToSerializedFileAndForget(obj: any[], path: string, allowTextSerialization: boolean): any;
    static LoadSerializedFileAndForget(path: string): any[];
    static ProjectWindowDrag(property: UnityEditor.HierarchyProperty, perform: boolean): UnityEditor.DragAndDropVisualMode;
    static HierarchyWindowDrag(property: UnityEditor.HierarchyProperty, perform: boolean, dropMode: UnityEditorInternal.InternalEditorUtility.HierarchyDropMode): UnityEditor.DragAndDropVisualMode;
    static SceneViewDrag(dropUpon: any, worldPosition: any, viewportPosition: any, perform: boolean): UnityEditor.DragAndDropVisualMode;
    static SetRectTransformTemporaryRect(rectTransform: any, rect: any): any;
    static HasTeamLicense(): boolean;
    static HasPro(): boolean;
    static HasFreeLicense(): boolean;
    static HasEduLicense(): boolean;
    static HasAdvancedLicenseOnBuildTarget(target: UnityEditor.BuildTarget): boolean;
    static GetBoundsOfDesktopAtPoint(pos: any): any;
    static RemoveTag(tag: string): any;
    static AddTag(tag: string): any;
    static GetSpriteOuterUV(sprite: any, getAtlasData: boolean): any;
    static GetObjectFromInstanceID(instanceID: number): any;
    static GetClassIDWithoutLoadingObject(instanceID: number): number;
    static GetLoadedObjectFromInstanceID(instanceID: number): any;
    static GetLayerName(layer: number): string;
    static GetAssetsFolder(): string;
    static GetEditorFolder(): string;
    static IsInEditorFolder(path: string): boolean;
    static ReloadWindowLayoutMenu(): any;
    static RevertFactoryLayoutSettings(quitOnCancel: boolean): any;
    static LoadDefaultLayout(): any;
    static SetupShaderMenu(material: any): any;
    static GetUnityVersionFull(): string;
    static GetFullUnityVersion(): string;
    static GetUnityVersion(): any;
    static GetUnityVersionDigits(): string;
    static GetUnityBuildBranch(): string;
    static GetUnityVersionDate(): number;
    static GetUnityRevision(): number;
    static IsUnityBeta(): boolean;
    static GetUnityCopyright(): string;
    static GetLicenseInfo(): string;
    static GetLicenseFlags(): number[];
    static GetAuthToken(): string;
    static OpenEditorConsole(): any;
    static GetGameObjectInstanceIDFromComponent(instanceID: number): number;
    static ReadScreenPixel(pixelPos: any, sizex: number, sizey: number): any[];
    static OpenPlayerConsole(): any;
    static GetDesktopResolution(): any;
    static TextifyEvent(evt: any): string;
    static GetAvailableDiffTools(): string[];
    static GetNoDiffToolsDetectedMessage(): string;
    static TransformBounds(b: any, t: any): any;
    static SetCustomLighting(lights: any[], ambient: any): any;
    static RemoveCustomLighting(): any;
    static HasFullscreenCamera(): boolean;
    static ResetCursor(): any;
    static CalculateSelectionBounds(usePivotOnlyForParticles: boolean, onlyUseActiveSelection: boolean): any;
    static OnGameViewFocus(focus: boolean): any;
    static OpenFileAtLineExternal(filename: string, line: number): boolean;
    static WiiUSaveStartupScreenToFile(image: any, path: string, outputWidth: number, outputHeight: number): boolean;
    static CanConnectToCacheServer(): boolean;
    static VerifyCacheServerIntegrity(): number;
    static FixCacheServerIntegrityErrors(): number;
    static DetectDotNetDll(path: string): UnityEditorInternal.DllType;
    static IsDotNet4Dll(path: string): boolean;
    static GetCrashReportFolder(): string;
    static DetermineDepthOrder(lhs: any, rhs: any): number;
    static ShowPackageManagerWindow(): any;
    static PassAndReturnVector2(v: any): any;
    static PassAndReturnColor32(c: any): any;
    static EnsureSceneHasBeenSaved(operation: string): boolean;
    static SaveCursorToFile(path: string, image: any, hotSpot: any): boolean;
    static GetScriptEditorFromPath(path: string): UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static IsScriptEditorSpecial(path: string): boolean;
    static GetExternalScriptEditor(): string;
    static SetExternalScriptEditor(path: string): any;
    static GetExternalScriptEditorArgs(): string;
    static SetExternalScriptEditorArgs(args: string): any;
    static GetScriptEditorFromPreferences(): UnityEditorInternal.InternalEditorUtility.ScriptEditor;
    static GetIconForFile(fileName: string): any;
    static GetEditorSettingsList(prefix: string, count: number): string[];
    static SaveEditorSettingsList(prefix: string, aList: string[], count: number): any;
    static TextAreaForDocBrowser(position: any, text: string, style: any): string;
    static GetSceneViewCameras(): any[];
    static ShowGameView(): any;
    static GetNewSelection(clickedInstanceID: number, allInstanceIDs: any, selectedInstanceIDs: any, lastClickedInstanceID: number, keepMultiSelection: boolean, useShiftAsActionKey: boolean, allowMultiSelection: boolean): any;
    static IsValidFileName(filename: string): boolean;
    static RemoveInvalidCharsFromFileName(filename: string, logIfInvalidChars: boolean): string;
    static GetDisplayStringOfInvalidCharsOfFileName(filename: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isApplicationActive: boolean;
    static readonly inBatchMode: boolean;
    static readonly isHumanControllingUs: boolean;
    static expandedProjectWindowItems: number[];
    static readonly tags: string[];
    static readonly layers: string[];
    static readonly unityPreferencesFolder: string;
    static readonly defaultScreenWidth: number;
    static readonly defaultScreenHeight: number;
    static readonly defaultWebScreenWidth: number;
    static readonly defaultWebScreenHeight: number;
    static readonly remoteScreenWidth: number;
    static readonly remoteScreenHeight: number;
    static readonly ignoreInspectorChanges: boolean;
    // fields
  }
}
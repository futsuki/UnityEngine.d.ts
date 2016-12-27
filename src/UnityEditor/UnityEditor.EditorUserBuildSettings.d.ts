declare namespace UnityEditor {
  class EditorUserBuildSettings {
    // constructors
    constructor();
    // methods
    static SetWSADotNetNative(config: UnityEditor.WSABuildType, enabled: boolean): void;
    static GetWSADotNetNative(config: UnityEditor.WSABuildType): boolean;
    static SwitchActiveBuildTarget(target: UnityEditor.BuildTarget): boolean;
    static GetBuildLocation(target: UnityEditor.BuildTarget): string;
    static SetBuildLocation(target: UnityEditor.BuildTarget, location: string): void;
    static SetPlatformSettings(platformName: string, name: string, value: string): void;
    static GetPlatformSettings(platformName: string, name: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static selectedBuildTargetGroup: UnityEditor.BuildTargetGroup;
    static selectedStandaloneTarget: UnityEditor.BuildTarget;
    static psmBuildSubtarget: UnityEditor.PSMBuildSubtarget;
    static psp2BuildSubtarget: UnityEditor.PSP2BuildSubtarget;
    static ps4BuildSubtarget: UnityEditor.PS4BuildSubtarget;
    static ps4HardwareTarget: UnityEditor.PS4HardwareTarget;
    static explicitNullChecks: boolean;
    static explicitDivideByZeroChecks: boolean;
    static needSubmissionMaterials: boolean;
    static compressWithPsArc: boolean;
    static forceInstallation: boolean;
    static enableHeadlessMode: boolean;
    static buildScriptsOnly: boolean;
    static xboxBuildSubtarget: UnityEditor.XboxBuildSubtarget;
    static wiiUBuildDebugLevel: UnityEditor.WiiUBuildDebugLevel;
    static wiiuBuildOutput: UnityEditor.WiiUBuildOutput;
    static wiiUEnableNetAPI: boolean;
    static wiiUBootMode: number;
    static streamingInstallLaunchRange: number;
    static xboxOneDeployMethod: UnityEditor.XboxOneDeployMethod;
    static xboxOneUsername: string;
    static xboxOneNetworkSharePath: string;
    static xboxOneAdditionalDebugPorts: string;
    static androidBuildSubtarget: UnityEditor.MobileTextureSubtarget;
    static androidBuildSystem: UnityEditor.AndroidBuildSystem;
    static wsaSubtarget: UnityEditor.WSASubtarget;
    static wsaSDK: UnityEditor.WSASDK;
    static wsaUWPBuildType: UnityEditor.WSAUWPBuildType;
    static wsaBuildAndRunDeployTarget: UnityEditor.WSABuildAndRunDeployTarget;
    static wsaGenerateReferenceProjects: boolean;
    static tizenBuildSubtarget: UnityEditor.MobileTextureSubtarget;
    static webPlayerStreamed: boolean;
    static webPlayerOfflineDeployment: boolean;
    static readonly activeBuildTarget: UnityEditor.BuildTarget;
    static readonly activeScriptCompilationDefines: string[];
    static development: boolean;
    static webGLUsePreBuiltUnityEngine: boolean;
    static connectProfiler: boolean;
    static allowDebugging: boolean;
    static exportAsGoogleAndroidProject: boolean;
    static symlinkLibraries: boolean;
    static iOSBuildConfigType: UnityEditor.iOSBuildType;
    static n3dsCreateCIAFile: boolean;
    static installInBuildFolder: boolean;
    static forceOptimizeScriptCompilation: boolean;
    // fields
    static activeBuildTargetChanged: (() => void);
  }
}

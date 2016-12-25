declare namespace UnityEditor.PlayerSettings {
  class PS4 {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static npTrophyPackPath: string;
    static npAgeRating: number;
    static npTitleSecret: string;
    static parentalLevel: number;
    static applicationParameter1: number;
    static applicationParameter2: number;
    static applicationParameter3: number;
    static applicationParameter4: number;
    static passcode: string;
    static monoEnv: string;
    static playerPrefsSupport: boolean;
    static restrictedAudioUsageRights: boolean;
    static useResolutionFallback: boolean;
    static contentID: string;
    static category: UnityEditor.PlayerSettings.PS4.PS4AppCategory;
    static appType: number;
    static masterVersion: string;
    static appVersion: string;
    static remotePlayKeyAssignment: UnityEditor.PlayerSettings.PS4.PS4RemotePlayKeyAssignment;
    static remotePlayKeyMappingDir: string;
    static playTogetherPlayerCount: number;
    static enterButtonAssignment: UnityEditor.PlayerSettings.PS4.PS4EnterButtonAssignment;
    static paramSfxPath: string;
    static videoOutPixelFormat: number;
    static videoOutInitialWidth: number;
    static videoOutReprojectionRate: number;
    static videoOutResolution: number;
    static PronunciationXMLPath: string;
    static PronunciationSIGPath: string;
    static BackgroundImagePath: string;
    static StartupImagePath: string;
    static SaveDataImagePath: string;
    static SdkOverride: string;
    static BGMPath: string;
    static ShareFilePath: string;
    static ShareOverlayImagePath: string;
    static PrivacyGuardImagePath: string;
    static patchDayOne: boolean;
    static PatchPkgPath: string;
    static PatchLatestPkgPath: string;
    static PatchChangeinfoPath: string;
    static NPtitleDatPath: string;
    static pnSessions: boolean;
    static pnPresence: boolean;
    static pnFriends: boolean;
    static pnGameCustomData: boolean;
    static downloadDataSize: number;
    static garlicHeapSize: number;
    static reprojectionSupport: boolean;
    static useAudio3dBackend: boolean;
    static audio3dVirtualSpeakerCount: number;
    static scriptOptimizationLevel: number;
    static socialScreenEnabled: number;
    static attribUserManagement: boolean;
    static attribMoveSupport: boolean;
    static attrib3DSupport: boolean;
    static attribShareSupport: boolean;
    static attribExclusiveVR: boolean;
    static disableAutoHideSplash: boolean;
    static attribCpuUsage: number;
    static includedModules: string[];
    // fields
  }
}

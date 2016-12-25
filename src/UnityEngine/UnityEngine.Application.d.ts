declare namespace UnityEngine {
  class Application {
    // constructors
    constructor();
    // methods
    static Quit(): any;
    static CancelQuit(): any;
    static Unload(): any;
    static GetStreamProgressForLevel(levelIndex: number): number;
    static GetStreamProgressForLevel(levelName: string): number;
    static CanStreamedLevelBeLoaded(levelIndex: number): boolean;
    static CanStreamedLevelBeLoaded(levelName: string): boolean;
    static CaptureScreenshot(filename: string, superSize: number): any;
    static CaptureScreenshot(filename: string): any;
    static HasProLicense(): boolean;
    static DontDestroyOnLoad(mono: UnityEngine.Object): any;
    static ExternalCall(functionName: string, args: any[]): any;
    static ExternalEval(script: string): any;
    static RequestAdvertisingIdentifierAsync(delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback): boolean;
    static OpenURL(url: string): any;
    static ForceCrash(mode: number): any;
    static GetStackTraceLogType(logType: UnityEngine.LogType): UnityEngine.StackTraceLogType;
    static SetStackTraceLogType(logType: UnityEngine.LogType, stackTraceType: UnityEngine.StackTraceLogType): any;
    static RequestUserAuthorization(mode: UnityEngine.UserAuthorization): UnityEngine.AsyncOperation;
    static HasUserAuthorization(mode: UnityEngine.UserAuthorization): boolean;
    static RegisterLogCallback(handler: UnityEngine.Application.LogCallback): any;
    static RegisterLogCallbackThreaded(handler: UnityEngine.Application.LogCallback): any;
    static LoadLevel(index: number): any;
    static LoadLevel(name: string): any;
    static LoadLevelAdditive(index: number): any;
    static LoadLevelAdditive(name: string): any;
    static LoadLevelAsync(index: number): UnityEngine.AsyncOperation;
    static LoadLevelAsync(levelName: string): UnityEngine.AsyncOperation;
    static LoadLevelAdditiveAsync(index: number): UnityEngine.AsyncOperation;
    static LoadLevelAdditiveAsync(levelName: string): UnityEngine.AsyncOperation;
    static UnloadLevel(index: number): boolean;
    static UnloadLevel(scenePath: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isLoadingLevel: boolean;
    static readonly streamedBytes: number;
    static readonly isPlaying: boolean;
    static readonly isEditor: boolean;
    static readonly isWebPlayer: boolean;
    static readonly platform: UnityEngine.RuntimePlatform;
    static readonly isMobilePlatform: boolean;
    static readonly isConsolePlatform: boolean;
    static runInBackground: boolean;
    static readonly isPlayer: boolean;
    static readonly dataPath: string;
    static readonly streamingAssetsPath: string;
    static readonly persistentDataPath: string;
    static readonly temporaryCachePath: string;
    static readonly srcValue: string;
    static readonly absoluteURL: string;
    static readonly unityVersion: string;
    static readonly version: string;
    static readonly installerName: string;
    static readonly bundleIdentifier: string;
    static readonly installMode: UnityEngine.ApplicationInstallMode;
    static readonly sandboxType: UnityEngine.ApplicationSandboxType;
    static readonly productName: string;
    static readonly companyName: string;
    static readonly cloudProjectId: string;
    static readonly webSecurityEnabled: boolean;
    static readonly webSecurityHostUrl: string;
    static targetFrameRate: number;
    static readonly systemLanguage: UnityEngine.SystemLanguage;
    static stackTraceLogType: UnityEngine.StackTraceLogType;
    static backgroundLoadingPriority: UnityEngine.ThreadPriority;
    static readonly internetReachability: UnityEngine.NetworkReachability;
    static readonly genuine: boolean;
    static readonly genuineCheckAvailable: boolean;
    static readonly isShowingSplashScreen: boolean;
    static readonly levelCount: number;
    static readonly loadedLevel: number;
    static readonly loadedLevelName: string;
    static readonly absoluteUrl: string;
    // fields
  }
}

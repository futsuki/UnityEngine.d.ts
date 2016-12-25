declare namespace UnityEditor.PlayerSettings {
  class WiiU {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static titleID: string;
    static groupID: string;
    static commonSaveSize: number;
    static accountSaveSize: number;
    static olvAccessKey: string;
    static tinCode: string;
    static joinGameId: string;
    static joinGameModeMask: string;
    static commonBossSize: number;
    static accountBossSize: number;
    static addOnUniqueIDs: string[];
    static supportsNunchuk: boolean;
    static supportsClassicController: boolean;
    static supportsBalanceBoard: boolean;
    static supportsMotionPlus: boolean;
    static supportsProController: boolean;
    static allowScreenCapture: boolean;
    static controllerCount: number;
    static mainThreadStackSize: number;
    static loaderThreadStackSize: number;
    static systemHeapSize: number;
    static tvResolution: UnityEditor.WiiUTVResolution;
    static readonly tvStartupScreen: any;
    static readonly gamePadStartupScreen: any;
    static gamePadMSAA: number;
    static profilerLibraryPath: string;
    static drcBufferDisabled: boolean;
    // fields
  }
}

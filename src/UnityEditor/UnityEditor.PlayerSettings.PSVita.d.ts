declare namespace UnityEditor.PlayerSettings {
  class PSVita {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static npTrophyPackPath: string;
    static powerMode: UnityEditor.PlayerSettings.PSVita.PSVitaPowerMode;
    static acquireBGM: boolean;
    static npSupportGBMorGJP: boolean;
    static tvBootMode: UnityEditor.PlayerSettings.PSVita.PSVitaTvBootMode;
    static tvDisableEmu: boolean;
    static upgradable: boolean;
    static healthWarning: boolean;
    static useLibLocation: boolean;
    static infoBarOnStartup: boolean;
    static infoBarColor: boolean;
    static enterButtonAssignment: UnityEditor.PlayerSettings.PSVita.PSVitaEnterButtonAssignment;
    static saveDataQuota: number;
    static parentalLevel: number;
    static shortTitle: string;
    static contentID: string;
    static category: UnityEditor.PlayerSettings.PSVita.PSVitaAppCategory;
    static masterVersion: string;
    static appVersion: string;
    static AllowTwitterDialog: boolean;
    static npAgeRating: number;
    static npTitleDatPath: string;
    static npCommunicationsID: string;
    static npCommsPassphrase: string;
    static npCommsSig: string;
    static paramSfxPath: string;
    static manualPath: string;
    static liveAreaGatePath: string;
    static liveAreaBackroundPath: string;
    static liveAreaPath: string;
    static liveAreaTrialPath: string;
    static patchChangeInfoPath: string;
    static patchOriginalPackage: string;
    static packagePassword: string;
    static keystoneFile: string;
    static memoryExpansionMode: UnityEditor.PlayerSettings.PSVita.PSVitaMemoryExpansionMode;
    static drmType: UnityEditor.PlayerSettings.PSVita.PSVitaDRMType;
    static storageType: number;
    static mediaCapacity: number;
    // fields
  }
}

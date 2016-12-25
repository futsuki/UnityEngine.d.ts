declare namespace UnityEditor.PlayerSettings {
  class XboxOne {
    // constructors
    constructor();
    // methods
    static SetCapability(capability: string, value: boolean): any;
    static GetCapability(capability: string): boolean;
    static SetSupportedLanguage(language: string, enabled: boolean): any;
    static GetSupportedLanguage(language: string): boolean;
    static RemoveSocketDefinition(name: string): any;
    static SetSocketDefinition(name: string, port: string, protocol: number, usages: number[], templateName: string, sessionRequirment: number, deviceUsages: number[]): any;
    static GetSocketDefinition(name: string, port: any, protocol: any, usages: any, templateName: any, sessionRequirment: any, deviceUsages: any): any;
    static RemoveAllowedProductId(id: string): any;
    static AddAllowedProductId(id: string): boolean;
    static UpdateAllowedProductId(idx: number, id: string): any;
    static SetGameRating(name: string, value: number): any;
    static GetGameRating(name: string): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static defaultLoggingLevel: UnityEditor.XboxOneLoggingLevel;
    static ProductId: string;
    static UpdateKey: string;
    static SandboxId: string;
    static ContentId: string;
    static TitleId: string;
    static SCID: string;
    static EnableVariableGPU: boolean;
    static DisableKinectGpuReservation: boolean;
    static EnablePIXSampling: boolean;
    static GameOsOverridePath: string;
    static PackagingOverridePath: string;
    static PackagingEncryption: UnityEditor.XboxOneEncryptionLevel;
    static PackageUpdateGranularity: UnityEditor.XboxOnePackageUpdateGranularity;
    static AppManifestOverridePath: string;
    static IsContentPackage: boolean;
    static Version: string;
    static Description: string;
    static readonly SocketNames: string[];
    static readonly AllowedProductIds: string[];
    static PersistentLocalStorageSize: number;
    static monoLoggingLevel: number;
    // fields
  }
}

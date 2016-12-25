declare namespace UnityEditor.Web {
  class AdsAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): any;
    OnProjectUnbound(): any;
    IsInitializedOnStartup(): boolean;
    SetInitializedOnStartup(enabled: boolean): any;
    IsIOSEnabled(): boolean;
    SetIOSEnabled(enabled: boolean): any;
    IsAndroidEnabled(): boolean;
    SetAndroidEnabled(enabled: boolean): any;
    GetIOSGameId(): string;
    SetIOSGameId(value: string): any;
    GetAndroidGameId(): string;
    SetAndroidGameId(value: string): any;
    IsTestModeEnabled(): boolean;
    SetTestModeEnabled(enabled: boolean): any;
    ShowServicePage(): any;
    GoBackToHub(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

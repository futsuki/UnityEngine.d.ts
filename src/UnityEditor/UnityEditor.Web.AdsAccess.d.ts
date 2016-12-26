declare namespace UnityEditor.Web {
  class AdsAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    OnProjectUnbound(): void;
    IsInitializedOnStartup(): boolean;
    SetInitializedOnStartup(enabled: boolean): void;
    IsIOSEnabled(): boolean;
    SetIOSEnabled(enabled: boolean): void;
    IsAndroidEnabled(): boolean;
    SetAndroidEnabled(enabled: boolean): void;
    GetIOSGameId(): string;
    SetIOSGameId(value: string): void;
    GetAndroidGameId(): string;
    SetAndroidGameId(value: string): void;
    IsTestModeEnabled(): boolean;
    SetTestModeEnabled(enabled: boolean): void;
    ShowServicePage(): void;
    GoBackToHub(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

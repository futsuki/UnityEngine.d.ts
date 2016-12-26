declare namespace UnityEditor.Connect {
  class UnityConnect {
    // constructors
    private constructor();
    // methods
    GetConfigurationURL(config: UnityEditor.Connect.CloudConfigUrl): string;
    GetEnvironment(): string;
    GetAPIVersion(): string;
    GetUserId(): string;
    GetUserName(): string;
    GetAccessToken(): string;
    GetProjectGUID(): string;
    GetProjectName(): string;
    GetOrganizationId(): string;
    GetOrganizationName(): string;
    GetOrganizationForeignKey(): string;
    RefreshProject(): void;
    ClearCache(): void;
    Logout(): void;
    WorkOffline(rememberDecision: boolean): void;
    ShowLogin(): void;
    OpenAuthorizedURLInWebBrowser(url: string): void;
    BindProject(projectGUID: string, projectName: string, organizationId: string): void;
    SetCOPPACompliance(compliance: UnityEditor.Connect.COPPACompliance): boolean;
    ClearErrors(): void;
    UnhandledError(request: string, responseCode: number, response: string): void;
    ComputerGoesToSleep(): void;
    ComputerDidWakeUp(): void;
    ClearAccessToken(): void;
    GoToHub(page: string): void;
    UnbindProject(): void;
    GetProjectInfo(): UnityEditor.Connect.ProjectInfo;
    GetUserInfo(): UnityEditor.Connect.UserInfo;
    GetConnectInfo(): UnityEditor.Connect.ConnectInfo;
    GetConfigurationUrlByIndex(index: number): string;
    GetCoreConfigurationUrl(): string;
    DisplayDialog(title: string, message: string, okBtn: string, cancelBtn: string): boolean;
    SetCOPPACompliance(compliance: number): boolean;
    static TestComputerGoesToSleep(): void;
    static TestComputerDidWakeUp(): void;
    static TestClearAccessToken(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly preferencesEnabled: boolean;
    static readonly skipMissingUPID: boolean;
    readonly online: boolean;
    readonly loggedIn: boolean;
    readonly projectValid: boolean;
    readonly workingOffline: boolean;
    readonly shouldShowServicesWindow: boolean;
    readonly configuration: string;
    readonly lastErrorMessage: string;
    readonly lastErrorCode: number;
    readonly userInfo: UnityEditor.Connect.UserInfo;
    readonly projectInfo: UnityEditor.Connect.ProjectInfo;
    readonly connectInfo: UnityEditor.Connect.ConnectInfo;
    readonly canBuildWithUPID: boolean;
    static readonly instance: UnityEditor.Connect.UnityConnect;
    // fields
  }
}

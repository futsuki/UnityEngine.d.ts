declare namespace UnityEditor.Web {
  class EditorProjectAccess extends System.Object {
    // constructors
    constructor();
    // methods
    GetProjectEditorVersion(): string;
    GetRESTServiceURI(): string;
    OpenLink(link: string): void;
    IsOnline(): boolean;
    IsLoggedIn(): boolean;
    GetEnvironment(): string;
    GetUserName(): string;
    GetUserDisplayName(): string;
    GetUserPrimaryOrganizationId(): string;
    GetUserAccessToken(): string;
    GetProjectName(): string;
    GetProjectGUID(): string;
    GetProjectPath(): string;
    GetProjectIcon(): string;
    GetOrganizationID(): string;
    GetBuildTarget(): string;
    IsProjectBound(): boolean;
    EnableCloud(enable: boolean): void;
    EnterPlayMode(): void;
    IsPlayMode(): boolean;
    SaveCurrentModifiedScenesIfUserWantsTo(): boolean;
    GetEditorSkinIndex(): number;
    GoToHistory(): void;
    ShowToolbarDropdown(): void;
    CloseToolbarWindow(): void;
    CloseToolbarWindowImmediately(): void;
    // properties
    // fields
  }
}

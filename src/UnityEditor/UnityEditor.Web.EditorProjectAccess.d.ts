declare namespace UnityEditor.Web {
  class EditorProjectAccess {
    // constructors
    constructor();
    // methods
    GetProjectEditorVersion(): string;
    GetRESTServiceURI(): string;
    OpenLink(link: string): any;
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
    EnableCloud(enable: boolean): any;
    EnterPlayMode(): any;
    IsPlayMode(): boolean;
    SaveCurrentModifiedScenesIfUserWantsTo(): boolean;
    GetEditorSkinIndex(): number;
    GoToHistory(): any;
    ShowToolbarDropdown(): any;
    CloseToolbarWindow(): any;
    CloseToolbarWindowImmediately(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

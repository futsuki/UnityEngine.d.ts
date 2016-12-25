declare namespace UnityEditor {
  class ASEditorBackend {
    // constructors
    constructor();
    // methods
    static DoAS(): any;
    static ShowASConflictResolutionsWindow(conflicting: string[]): any;
    static CommitItemsChanged(): any;
    static CBReinitCommitWindow(actionResult: number): any;
    static CBCommitFinished(actionResult: number): any;
    static CBOverviewsCommitFinished(actionResult: number): any;
    static CBReinitOnSuccess(actionResult: number): any;
    static CBReinitASMainWindow(): any;
    static CBDoDiscardChanges(actionResult: number): any;
    static CBInitUpdatePage(actionResult: number): any;
    static CBInitHistoryPage(actionResult: number): any;
    static CBInitOverviewPage(actionResult: number): any;
    static SettingsIfNeeded(): boolean;
    static SettingsAreValid(): boolean;
    static InitializeMaintBinding(): boolean;
    static Testing_SetActionFinishedCallback(klass: string, name: string): any;
    static Testing_SetActiveDatabase(host: string, port: number, projectName: string, dbName: string, user: string, pwd: string): any;
    static Testing_SetupDatabase(host: string, port: number, adminUser: string, adminPwd: string, user: string, pwd: string, projectName: string): boolean;
    static Testing_GetAllDatabaseNames(): string[];
    static Testing_SetConflictResolutionFunction(klass: string, fn: string): any;
    static Testing_DummyConflictResolutionFunction(conflicting: string[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly ASWin: UnityEditor.ASMainWindow;
    // fields
    static kServerSettingsFile: string;
    static kUserName: string;
    static kPassword: string;
    static kTimeout: string;
    static kSettingsType: string;
    static kConnectionSettings: string;
    static kPortNumber: string;
    static kServer: string;
    static kDatabaseName: string;
    static kProjectName: string;
    static kDefaultServerPort: number;
    static asMainWin: UnityEditor.ASMainWindow;
  }
}

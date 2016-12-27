declare namespace UnityEditor {
  class ASEditorBackend extends System.Object {
    // constructors
    constructor();
    // methods
    static DoAS(): void;
    static ShowASConflictResolutionsWindow(conflicting: string[]): void;
    static CommitItemsChanged(): void;
    static CBReinitCommitWindow(actionResult: number): void;
    static CBCommitFinished(actionResult: number): void;
    static CBOverviewsCommitFinished(actionResult: number): void;
    static CBReinitOnSuccess(actionResult: number): void;
    static CBReinitASMainWindow(): void;
    static CBDoDiscardChanges(actionResult: number): void;
    static CBInitUpdatePage(actionResult: number): void;
    static CBInitHistoryPage(actionResult: number): void;
    static CBInitOverviewPage(actionResult: number): void;
    static SettingsIfNeeded(): boolean;
    static SettingsAreValid(): boolean;
    static InitializeMaintBinding(): boolean;
    static Testing_SetActionFinishedCallback(klass: string, name: string): void;
    static Testing_SetActiveDatabase(host: string, port: number, projectName: string, dbName: string, user: string, pwd: string): void;
    static Testing_SetupDatabase(host: string, port: number, adminUser: string, adminPwd: string, user: string, pwd: string, projectName: string): boolean;
    static Testing_GetAllDatabaseNames(): string[];
    static Testing_SetConflictResolutionFunction(klass: string, fn: string): void;
    static Testing_DummyConflictResolutionFunction(conflicting: string[]): void;
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

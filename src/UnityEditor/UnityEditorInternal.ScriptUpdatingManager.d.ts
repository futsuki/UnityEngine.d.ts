declare namespace UnityEditorInternal {
  class ScriptUpdatingManager extends System.Object {
    // constructors
    constructor();
    // methods
    static WaitForVCSServerConnection(reportTimeout: boolean): boolean;
    static ReportExpectedUpdateFailure(): void;
    static ReportGroupedAPIUpdaterFailure(msg: string): void;
    // properties
    static readonly numberOfTimesAsked: number;
    // fields
  }
}

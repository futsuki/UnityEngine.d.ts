declare namespace UnityEditorInternal {
  class ScriptUpdatingManager {
    // constructors
    constructor();
    // methods
    static WaitForVCSServerConnection(reportTimeout: boolean): boolean;
    static ReportExpectedUpdateFailure(): any;
    static ReportGroupedAPIUpdaterFailure(msg: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly numberOfTimesAsked: number;
    // fields
  }
}

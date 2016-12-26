declare namespace UnityEditorInternal {
  class ScriptUpdatingManager {
    // constructors
    constructor();
    // methods
    static WaitForVCSServerConnection(reportTimeout: boolean): boolean;
    static ReportExpectedUpdateFailure(): void;
    static ReportGroupedAPIUpdaterFailure(msg: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly numberOfTimesAsked: number;
    // fields
  }
}

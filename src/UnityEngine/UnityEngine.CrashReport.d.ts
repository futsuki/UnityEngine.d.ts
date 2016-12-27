declare namespace UnityEngine {
  class CrashReport extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RemoveAll(): void;
    Remove(): void;
    // properties
    static readonly reports: UnityEngine.CrashReport[];
    static readonly lastReport: UnityEngine.CrashReport;
    // fields
    time: any;
    text: string;
  }
}

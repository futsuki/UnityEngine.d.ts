declare namespace UnityEngine {
  class CrashReport {
    // constructors
    private constructor();
    // methods
    static RemoveAll(): void;
    Remove(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly reports: UnityEngine.CrashReport[];
    static readonly lastReport: UnityEngine.CrashReport;
    // fields
    time: any;
    text: string;
  }
}

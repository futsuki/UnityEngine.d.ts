declare namespace UnityEditorInternal {
  class LogEntries {
    // constructors
    constructor();
    // methods
    static RowGotDoubleClicked(index: number): any;
    static GetStatusText(): string;
    static GetStatusMask(): number;
    static StartGettingEntries(): number;
    static SetConsoleFlag(bit: number, value: boolean): any;
    static EndGettingEntries(): any;
    static GetCount(): number;
    static GetCountsByType(errorCount: any, warningCount: any, logCount: any): any;
    static GetFirstTwoLinesEntryTextAndModeInternal(row: number, mask: any, outString: any): any;
    static GetEntryInternal(row: number, outputEntry: UnityEditorInternal.LogEntry): boolean;
    static GetEntryCount(row: number): number;
    static Clear(): any;
    static GetStatusViewErrorIndex(): number;
    static ClickStatusBar(count: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static consoleFlags: number;
    // fields
  }
}

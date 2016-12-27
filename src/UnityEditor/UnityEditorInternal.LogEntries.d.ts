declare namespace UnityEditorInternal {
  class LogEntries extends System.Object {
    // constructors
    constructor();
    // methods
    static RowGotDoubleClicked(index: number): void;
    static GetStatusText(): string;
    static GetStatusMask(): number;
    static StartGettingEntries(): number;
    static SetConsoleFlag(bit: number, value: boolean): void;
    static EndGettingEntries(): void;
    static GetCount(): number;
    static GetCountsByType(errorCount: any, warningCount: any, logCount: any): void;
    static GetFirstTwoLinesEntryTextAndModeInternal(row: number, mask: any, outString: any): void;
    static GetEntryInternal(row: number, outputEntry: UnityEditorInternal.LogEntry): boolean;
    static GetEntryCount(row: number): number;
    static Clear(): void;
    static GetStatusViewErrorIndex(): number;
    static ClickStatusBar(count: number): void;
    // properties
    static consoleFlags: number;
    // fields
  }
}

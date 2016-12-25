declare namespace UnityEditorInternal {
  class LogEntry {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    condition: string;
    errorNum: number;
    file: string;
    line: number;
    mode: number;
    instanceID: number;
    identifier: number;
    isWorldPlaying: number;
  }
}

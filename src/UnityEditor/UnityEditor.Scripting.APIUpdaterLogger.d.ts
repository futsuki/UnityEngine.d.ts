declare namespace UnityEditor.Scripting {
  class APIUpdaterLogger {
    // constructors
    constructor();
    // methods
    static WriteToFile(msg: string, args: any[]): void;
    static WriteErrorToConsole(msg: string, args: any[]): void;
    static WriteInfoToConsole(line: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

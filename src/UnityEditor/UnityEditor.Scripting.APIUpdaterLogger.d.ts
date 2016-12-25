declare namespace UnityEditor.Scripting {
  class APIUpdaterLogger {
    // constructors
    constructor();
    // methods
    static WriteToFile(msg: string, args: any[]): any;
    static WriteErrorToConsole(msg: string, args: any[]): any;
    static WriteInfoToConsole(line: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}

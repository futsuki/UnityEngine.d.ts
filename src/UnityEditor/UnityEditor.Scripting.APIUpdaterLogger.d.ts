declare namespace UnityEditor.Scripting {
  class APIUpdaterLogger extends System.Object {
    // constructors
    constructor();
    // methods
    static WriteToFile(msg: string, args: any[]): void;
    static WriteErrorToConsole(msg: string, args: any[]): void;
    static WriteInfoToConsole(line: string): void;
    // properties
    // fields
  }
}

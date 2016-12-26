declare namespace UnityEditor.VersionControl {
  class CustomCommand {
    // constructors
    private constructor();
    // methods
    StartTask(): UnityEditor.VersionControl.Task;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    readonly label: string;
    readonly context: UnityEditor.VersionControl.CommandContext;
    // fields
  }
}

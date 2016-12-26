declare namespace UnityEditor.VersionControl {
  class Message {
    // constructors
    private constructor();
    // methods
    Dispose(): void;
    Show(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly severity: UnityEditor.VersionControl.Message.Severity;
    readonly message: string;
    // fields
  }
}

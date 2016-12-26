declare namespace UnityEditor.VersionControl {
  class ConfigField {
    // constructors
    private constructor();
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    readonly label: string;
    readonly description: string;
    readonly isRequired: boolean;
    readonly isPassword: boolean;
    // fields
  }
}

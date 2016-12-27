declare namespace UnityEditor.Modules {
  class IUserAssembliesValidator {
    // constructors
    protected constructor();
    // methods
    Validate(userAssemblies: string[]): void;
    Cleanup(): void;
    // properties
    readonly canRunInBackground: boolean;
    // fields
  }
}

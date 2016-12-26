declare namespace UnityEditor.Modules {
  class IUserAssembliesValidator {
    // constructors
    private constructor();
    // methods
    Validate(userAssemblies: string[]): void;
    Cleanup(): void;
    // properties
    readonly canRunInBackground: boolean;
    // fields
  }
}

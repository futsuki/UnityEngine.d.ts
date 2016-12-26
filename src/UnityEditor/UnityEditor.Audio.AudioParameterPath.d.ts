declare namespace UnityEditor.Audio {
  class AudioParameterPath {
    // constructors
    private constructor();
    // methods
    ResolveStringPath(getOnlyBasePath: boolean): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    parameter: UnityEditor.GUID;
  }
}

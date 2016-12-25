declare namespace UnityEngine.Experimental.Director {
  class DirectorUpdateMode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static DSPClock: UnityEngine.Experimental.Director.DirectorUpdateMode;
    static GameTime: UnityEngine.Experimental.Director.DirectorUpdateMode;
    static UnscaledGameTime: UnityEngine.Experimental.Director.DirectorUpdateMode;
    static Manual: UnityEngine.Experimental.Director.DirectorUpdateMode;
  }
}

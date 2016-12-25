declare namespace UnityEngine.Experimental.Director {
  class PlayState {
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
    static Paused: UnityEngine.Experimental.Director.PlayState;
    static Playing: UnityEngine.Experimental.Director.PlayState;
  }
}

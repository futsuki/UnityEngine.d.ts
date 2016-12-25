declare namespace UnityEngine {
  class NetworkMessageInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly timestamp: number;
    readonly sender: UnityEngine.NetworkPlayer;
    readonly networkView: UnityEngine.NetworkView;
    // fields
  }
}

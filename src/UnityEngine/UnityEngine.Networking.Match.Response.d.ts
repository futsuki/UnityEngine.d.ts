declare namespace UnityEngine.Networking.Match {
  class Response extends UnityEngine.Networking.Match.ResponseBase {
    // constructors
    protected constructor();
    // methods
    SetSuccess(): void;
    SetFailure(info: string): void;
    ToString(): string;
    Parse(obj: any): void;
    // properties
    readonly success: boolean;
    readonly extendedInfo: string;
    // fields
  }
}

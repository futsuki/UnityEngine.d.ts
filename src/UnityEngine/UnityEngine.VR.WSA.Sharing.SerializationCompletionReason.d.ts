declare namespace UnityEngine.VR.WSA.Sharing {
  class SerializationCompletionReason {
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
    static Succeeded: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
    static NotSupported: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
    static AccessDenied: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
    static UnknownError: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason;
  }
}

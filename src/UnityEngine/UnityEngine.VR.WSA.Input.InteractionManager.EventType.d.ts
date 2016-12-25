declare namespace UnityEngine.VR.WSA.Input.InteractionManager {
  class EventType {
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
    static SourceDetected: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourceLost: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourceUpdated: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourcePressed: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
    static SourceReleased: UnityEngine.VR.WSA.Input.InteractionManager.EventType;
  }
}

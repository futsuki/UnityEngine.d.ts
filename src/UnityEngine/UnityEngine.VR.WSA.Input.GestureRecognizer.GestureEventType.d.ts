declare namespace UnityEngine.VR.WSA.Input.GestureRecognizer {
  class GestureEventType {
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
    static InteractionDetected: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static HoldCanceled: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static HoldCompleted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static HoldStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static TapDetected: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationCanceled: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationCompleted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static ManipulationUpdated: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationCanceled: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationCompleted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static NavigationUpdated: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static RecognitionStarted: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
    static RecognitionEnded: UnityEngine.VR.WSA.Input.GestureRecognizer.GestureEventType;
  }
}

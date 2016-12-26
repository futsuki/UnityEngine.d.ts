declare namespace UnityEngine.EventSystems.PointerEventData {
  class FramePressState {
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
    static Pressed: UnityEngine.EventSystems.PointerEventData.FramePressState;
    static Released: UnityEngine.EventSystems.PointerEventData.FramePressState;
    static PressedAndReleased: UnityEngine.EventSystems.PointerEventData.FramePressState;
    static NotChanged: UnityEngine.EventSystems.PointerEventData.FramePressState;
  }
}

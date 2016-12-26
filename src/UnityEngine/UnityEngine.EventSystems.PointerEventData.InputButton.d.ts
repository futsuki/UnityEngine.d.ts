declare namespace UnityEngine.EventSystems.PointerEventData {
  class InputButton {
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
    static Left: UnityEngine.EventSystems.PointerEventData.InputButton;
    static Right: UnityEngine.EventSystems.PointerEventData.InputButton;
    static Middle: UnityEngine.EventSystems.PointerEventData.InputButton;
  }
}

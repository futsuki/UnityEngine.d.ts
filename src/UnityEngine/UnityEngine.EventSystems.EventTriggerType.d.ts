declare namespace UnityEngine.EventSystems {
  class EventTriggerType {
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
    static PointerEnter: UnityEngine.EventSystems.EventTriggerType;
    static PointerExit: UnityEngine.EventSystems.EventTriggerType;
    static PointerDown: UnityEngine.EventSystems.EventTriggerType;
    static PointerUp: UnityEngine.EventSystems.EventTriggerType;
    static PointerClick: UnityEngine.EventSystems.EventTriggerType;
    static Drag: UnityEngine.EventSystems.EventTriggerType;
    static Drop: UnityEngine.EventSystems.EventTriggerType;
    static Scroll: UnityEngine.EventSystems.EventTriggerType;
    static UpdateSelected: UnityEngine.EventSystems.EventTriggerType;
    static Select: UnityEngine.EventSystems.EventTriggerType;
    static Deselect: UnityEngine.EventSystems.EventTriggerType;
    static Move: UnityEngine.EventSystems.EventTriggerType;
    static InitializePotentialDrag: UnityEngine.EventSystems.EventTriggerType;
    static BeginDrag: UnityEngine.EventSystems.EventTriggerType;
    static EndDrag: UnityEngine.EventSystems.EventTriggerType;
    static Submit: UnityEngine.EventSystems.EventTriggerType;
    static Cancel: UnityEngine.EventSystems.EventTriggerType;
  }
}

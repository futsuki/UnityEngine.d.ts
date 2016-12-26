declare namespace UnityEngine {
  class Event {
    // constructors
    constructor();
    constructor(displayIndex: number);
    constructor(other: UnityEngine.Event);
    // methods
    static KeyboardEvent(key: string): UnityEngine.Event;
    GetHashCode(): number;
    Equals(obj: any): boolean;
    ToString(): string;
    Use(): void;
    GetTypeForControl(controlID: number): UnityEngine.EventType;
    static PopEvent(outEvent: UnityEngine.Event): boolean;
    static GetEventCount(): number;
    GetType(): any;
    // properties
    mousePosition: UnityEngine.Vector2;
    delta: UnityEngine.Vector2;
    mouseRay: UnityEngine.Ray;
    shift: boolean;
    control: boolean;
    alt: boolean;
    command: boolean;
    capsLock: boolean;
    numeric: boolean;
    readonly functionKey: boolean;
    static current: UnityEngine.Event;
    readonly isKey: boolean;
    readonly isMouse: boolean;
    readonly rawType: UnityEngine.EventType;
    type: UnityEngine.EventType;
    button: number;
    modifiers: UnityEngine.EventModifiers;
    pressure: number;
    clickCount: number;
    character: any;
    commandName: string;
    keyCode: UnityEngine.KeyCode;
    displayIndex: number;
    // fields
  }
}

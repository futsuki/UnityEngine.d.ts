declare namespace UnityEngine {
  class CalendarUnit {
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
    static Era: UnityEngine.CalendarUnit;
    static Year: UnityEngine.CalendarUnit;
    static Month: UnityEngine.CalendarUnit;
    static Day: UnityEngine.CalendarUnit;
    static Hour: UnityEngine.CalendarUnit;
    static Minute: UnityEngine.CalendarUnit;
    static Second: UnityEngine.CalendarUnit;
    static Week: UnityEngine.CalendarUnit;
    static Weekday: UnityEngine.CalendarUnit;
    static WeekdayOrdinal: UnityEngine.CalendarUnit;
    static Quarter: UnityEngine.CalendarUnit;
  }
}
